// ===== 插画定义 =====

// 第一阶段插画（4×4）
function createStage1SVG(){
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <rect width="1024" height="1024" fill="#1E1E1E"/>
    <circle cx="512" cy="280" r="420" fill="#FFF8DC" opacity="0.2"/>
    <rect x="330" y="460" width="360" height="180" fill="#D9B47A" stroke="#000"/>
    <circle cx="420" cy="500" r="12" fill="#000"/>
    <circle cx="460" cy="530" r="12" fill="#fff"/>
    <circle cx="500" cy="500" r="12" fill="#000"/>
    <circle cx="540" cy="530" r="12" fill="#fff"/>
    <text x="512" y="100" font-size="40" text-anchor="middle" fill="#FFD27F">孤灯悟道 · 第一阶段</text>
  </svg>`;
}

// 第二阶段插画（6×6，细节更丰富）
function createStage2SVG(){
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <rect width="1024" height="1024" fill="#1E1E1E"/>
    ${Array.from({length:20},(_,i)=>`<rect x="${i*60}" y="0" width="2" height="1024" fill="#2a2a2a" opacity="0.3"/>`).join("")}
    ${Array.from({length:20},(_,i)=>`<rect x="0" y="${i*60}" width="1024" height="2" fill="#2a2a2a" opacity="0.3"/>`).join("")}
    <circle cx="512" cy="200" r="500" fill="#FFF5C2" opacity="0.15"/>
    <circle cx="512" cy="200" r="300" fill="#FFE58A" opacity="0.25"/>
    <rect x="280" y="420" width="460" height="220" fill="#D9B47A" stroke="#000" stroke-width="2"/>
    <g stroke="#000" stroke-width="1">
      ${Array.from({length:12},(_,i)=>`<line x1="${300+i*38}" y1="440" x2="${300+i*38}" y2="620"/>`).join("")}
      ${Array.from({length:7},(_,i)=>`<line x1="300" y1="${440+i*30}" x2="740" y2="${440+i*30}"/>`).join("")}
    </g>
    ${Array.from({length:15},()=>`<circle cx="${320+Math.random()*400}" cy="${460+Math.random()*140}" r="12" fill="${Math.random()>0.5?'#000':'#fff'}"/>`).join("")}
    <ellipse cx="240" cy="560" rx="40" ry="28" fill="#222"/>
    <circle cx="240" cy="560" r="20" fill="none" stroke="#888" stroke-dasharray="4,4"/>
    <ellipse cx="780" cy="560" rx="40" ry="28" fill="#eee" stroke="#444"/>
    <circle cx="780" cy="560" r="20" fill="none" stroke="#999" stroke-dasharray="3,6"/>
    <rect x="200" y="600" width="80" height="30" fill="#7ABF9E" stroke="#333"/>
    <rect x="220" y="590" width="100" height="20" fill="#C05050" stroke="#333"/>
    <rect x="240" y="580" width="120" height="18" fill="#4466AA" stroke="#222"/>
    <path d="M260 780 C250 640, 320 500, 380 480 C420 470, 450 490, 440 560 C430 630, 400 700, 340 780 Z" fill="#444" opacity="0.9"/>
    <path d="M760 780 C770 640, 700 500, 640 480 C600 470, 570 490, 580 560 C590 630, 620 700, 680 780 Z" fill="#666" opacity="0.7"/>
    <text x="512" y="100" font-size="42" text-anchor="middle" fill="#FFD27F" font-family="serif">孤灯悟道 · 第二阶段</text>
  </svg>`;
}

function svgDataUrl(svgString){
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
}

// ===== DOM 元素 =====
const board = document.getElementById('board');
const shuffleBtn = document.getElementById('shuffleBtn');
const previewBtn = document.getElementById('previewBtn');
const previewImg = document.getElementById('preview');
const numberToggle = document.getElementById('numberToggle');

const movesEl = document.getElementById('moves');
const timeEl = document.getElementById('time');
const balanceEl = document.getElementById('balance');
const toast = document.getElementById('toast');

let wu = 0, chi = 0, wang = 0;
let wuEl = document.getElementById('wu');
let chiEl = document.getElementById('chi');
let wangEl = document.getElementById('wang');
let minStepsEl = document.getElementById('minSteps');

// ===== 游戏状态 =====
let currentStage = 1;
let N = 4;
let imgURL = "turnon.png";

let tiles = [];
let order = [];
let started = false, moves = 0, timerId = null, startAt = null;
let firstPick = null;
let baselineMinSteps = 0;

function formatTime(ms){
  const s = Math.floor(ms/1000); const m = Math.floor(s/60); const r = s%60;
  return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;
}
function showToast(msg){
  toast.textContent = msg; toast.style.display = 'block';
  setTimeout(()=> toast.style.display='none', 2500);
}
function updateStats(){
  movesEl.textContent = moves;
  const t = started ? Date.now() - startAt : 0;
  timeEl.textContent = formatTime(t);
  const correct = order.reduce((acc, piece, idx) => acc + (piece===idx), 0);
  const pct = Math.round(correct * 100 / (N*N));
  balanceEl.textContent = pct + '%';
  if(wuEl) wuEl.textContent = wu;
  if(chiEl) chiEl.textContent = chi;
  if(wangEl) wangEl.textContent = wang;
  if(minStepsEl) minStepsEl.textContent = baselineMinSteps;
}
function startTimer(){ if(timerId) clearInterval(timerId); startAt = Date.now(); started = true; timerId = setInterval(updateStats, 250); }
function stopTimer(){ if(timerId) clearInterval(timerId); timerId = null; started=false; updateStats(); }

// === 最少交换数与方案 ===
function buildMinSwapPlan(arr){
  const n = arr.length;
  const posOf = Array(n);
  for(let i=0;i<n;i++) posOf[arr[i]] = i;
  const steps = [];
  for(let i=0;i<n;i++){
    while(arr[i] !== i){
      const j = posOf[i];
      [arr[i], arr[j]] = [arr[j], arr[i]];
      posOf[arr[i]] = i; posOf[arr[j]] = j;
      steps.push([i, j]);
    }
  }
  return steps;
}

let autoSolving = false;
async function demoSolveWithMinSteps(){
  if(autoSolving) return; autoSolving = true;
  const plan = buildMinSwapPlan(order.slice());
  for(const [a,b] of plan){
    await new Promise(r=> setTimeout(r, 120));
    swapPieces(a,b);
  }
  autoSolving = false;
}

// ===== 游戏逻辑 =====
function shuffledPieces(){
  const arr = Array.from({length: N*N}, (_,i)=>i);
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  if(arr.every((v,i)=>v===i)) [arr[0],arr[1]]=[arr[1],arr[0]];
  return arr;
}
function buildBoard(){
  board.innerHTML = ''; tiles.length = 0; firstPick=null; moves=0; stopTimer();
  board.style.setProperty('--n', N);
  order = shuffledPieces();
  baselineMinSteps = buildMinSwapPlan(order.slice()).length;
  for(let i=0;i<N*N;i++){
    const pieceIndex = order[i];
    const tile = document.createElement('button');
    tile.className='tile'; tile.setAttribute('draggable','true');
    tile.dataset.pos = i; tile.dataset.piece = pieceIndex;
    applyTileBackground(tile, pieceIndex);
    const num = document.createElement('span'); num.className='num'; num.textContent = pieceIndex+1;
    tile.appendChild(num);
    attachTileEvents(tile);
    board.appendChild(tile); tiles.push(tile);
  }
  updateNumberToggle();
  updateStats();
  previewImg.src = imgURL;
}
function applyTileBackground(tile, pieceIndex){
  tile.style.backgroundImage = `url("${imgURL}")`;
  tile.style.backgroundSize = `${N*100}% ${N*100}%`;
  const col = pieceIndex % N, row = Math.floor(pieceIndex / N);
  const x = (col/(N-1))*100; const y = (row/(N-1))*100;
  tile.style.backgroundPosition = `${x}% ${y}%`;
}
function swapPieces(posA, posB){
  if(posA===posB) return;
  const tileA = tiles[posA], tileB = tiles[posB];
  const a = parseInt(tileA.dataset.piece,10);
  const b = parseInt(tileB.dataset.piece,10);
  tileA.dataset.piece = b; tileB.dataset.piece = a;
  order[posA]=b; order[posB]=a;
  applyTileBackground(tileA, b); applyTileBackground(tileB, a);
  moves++; if(!started) startTimer();
  checkWin(); updateStats();
}
function checkWin(){
  if(order.every((v,i)=>v===i)){
    stopTimer();
    wu += 10;
    const penaltySteps = Math.max(0, moves - baselineMinSteps - 2);
    if(penaltySteps > 0){ chi += penaltySteps; wang += penaltySteps; }
    updateStats();
    if(currentStage === 1){
      currentStage = 2; N = 6; imgURL = "turnon.png";
      showToast('第一阶段完成！进入第二阶段 6×6 拼图');
      setTimeout(()=> buildBoard(), 1800);
    } else {
      if(wu > chi + wang){ showToast('你以清明之心走向圆满结局 🌸'); }
      else if(chi > wu){ showToast('执念过重，坠入痴梦… 🌑'); }
      else { showToast('徘徊不定，陷入惘境… 🌫️'); }
    }
  }
}
function attachTileEvents(tile){
  tile.addEventListener('click', ()=>{
    const pos = parseInt(tile.dataset.pos,10);
    if(firstPick==null){ firstPick=pos; tile.classList.add('selected'); }
    else { tiles[firstPick]?.classList.remove('selected'); swapPieces(firstPick, pos); firstPick=null; }
  });
  tile.addEventListener('dragstart', e=>{ e.dataTransfer.setData('text/plain', tile.dataset.pos); tile.style.opacity='.6'; });
  tile.addEventListener('dragend', ()=>{ tile.style.opacity='1'; });
  tile.addEventListener('dragover', e=>{ e.preventDefault(); });
  tile.addEventListener('drop', e=>{ e.preventDefault(); const from = parseInt(e.dataTransfer.getData('text/plain'),10); const to = parseInt(tile.dataset.pos,10); swapPieces(from, to); });
}
function updateNumberToggle(){ board.classList.toggle('show-number', numberToggle.checked); }

// ===== 控件事件 =====
shuffleBtn.addEventListener('click', ()=> buildBoard());
previewBtn.addEventListener('click', ()=>{ const on = previewImg.classList.toggle('visible'); previewBtn.setAttribute('aria-pressed', String(on)); });
numberToggle.addEventListener('change', updateNumberToggle);

// ===== 初始化 =====
buildBoard();
