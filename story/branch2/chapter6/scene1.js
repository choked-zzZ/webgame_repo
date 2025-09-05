import { Event } from '../../../js/model.js';

// 分支2剧情 - 前往比赛的内心挣扎
const scene1Events6 = [
    // 旁白段落1
    new Event('dialog', { speaker: '', text: '天色微亮，薄雾笼罩着城市的街道。车窗外的景物不断倒退，灯影、树影交织成虚幻的流光。孟弈空独自坐在车厢一角，手边放着随身带的棋谱，指尖不自觉地在膝盖上比划着落子的位置。'}),
    
    // 旁白段落2
    new Event('dialog', { speaker: '', text: '他知道，此刻的程若谷仍在医院，或许正静静地看着天花板，或许还在昏睡。她的眼神、她昨晚的话语，在他脑海中挥之不去。'}),
    
    // 旁白段落3
    new Event('dialog', { speaker: '', text: '（车内安静，只能听到车轮与轨道的摩擦声）'}),
    
    // 孟弈空的心声
    new Event('dialog', { speaker: '孟弈空', text: '若谷……等我赢下这盘棋，也许我就能证明一切。', sprite: '../../../main_page/image/character/yikong.png'}),
    
    // 结尾旁白
    new Event('dialog', { speaker: '', text: '即便如此，他心底仍有一丝不安。棋局的重压与程若谷的身影交织在一起，像一块重石压在他胸口。'})
];

export { scene1Events6 };