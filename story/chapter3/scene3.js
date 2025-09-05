import { Event } from '../../js/model.js';
const scene3Events3 = [
    new Event('dialog', { speaker: '', text: '晨雾尚未散尽，孟弈空独自坐在庭院石桌前，棋盘摊开，黑白子分列，棋局已推演到中盘。空气里弥漫着茶香，却掩盖不住他眉心的紧锁。程若谷端着一碗刚熬好的汤药走来，步伐轻缓。她的脸色有些苍白，但眼神依旧温和。'}),
    new Event('dialog', { speaker: '程若谷', text: '（轻声）弈空，这几天你几乎没睡过一个好觉。再这样下去，就算棋力再高，也会败给自己的身体。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '（抬头，略显不耐）我没事。对手太强了，我必须想办法......每一步都要算到最远。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '（放下汤药，叹息）可棋盘之外的事，你有没有想过？你总是这样，把自己困在里面......', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空的手停在棋盘上方，指尖轻轻碰触棋子，却迟迟没有落下。那一瞬间，他心中闪过矛盾：究竟是该继续推演棋局，还是听她的话，停下来休息？'}),
    // 添加选择事件
    new Event('choice', {
        text: '玩家选择',
        options: [
            {
                text: '我要战胜他！',
                nextEventIndex: -1,
                setFlags: { chapter3Scene3Choice: 'defeat_opponent' }
            },
            {
                text: '我要看清自己。',
                nextEventIndex: -1,
                setFlags: { chapter3Scene3Choice: 'understand_self' }
            },
            {
                text: '我不知道……',
                nextEventIndex: -1,
                setFlags: { chapter3Scene3Choice: 'uncertain' }
            }
        ]
    }),
    // 选择1对话 - 休息
    new Event('dialog', { speaker: '', text: '孟弈空轻轻叹了口气，终于放下了指尖的棋子，转而接过汤药。碗沿的热气扑面而来，似乎冲淡了他心头的一丝执念。'}),
    new Event('dialog', { speaker: '孟弈空', text: '好吧……就休息一会儿。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '嗯，这就够了。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '程若谷眼中闪烁的安心，比晨雾更温柔。而孟弈空心底却滋生了一丝不安：对手的棋力，会因为自己这一刻的停顿而领先吗？'}),
    // 选择2对话 - 继续下棋
    new Event('dialog', { speaker: '', text: '孟弈空手指一紧，黑子落下的清脆声在庭院中格外刺耳。他没有去碰那碗药，只是紧盯着棋盘。'}),
    new Event('dialog', { speaker: '孟弈空', text: '这盘棋，我不能留遗憾。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '你总是这样……', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '程若谷轻轻把汤药放在石桌一角，转身时，身影显得格外单薄。孟弈空却没有抬头，他的目光仍沉浸在棋局中，心里却隐隐有一丝波动：那渐行渐远的背影，他真的能承受失去吗？'})
]
export { scene3Events3 };
