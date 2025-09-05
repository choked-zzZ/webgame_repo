import { Event } from '../../../js/model.js';

// 分支2剧情 - 十年后的孟弈空
const scene1Events7 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '岁月将一切碾得模糊不清。程若谷的笑容只剩在梦里，而孟弈空却像被困在一盘无尽的棋局之中。'}),
    new Event('dialog', { speaker: '', text: '这十年间，萧之平偶尔会来看望孟弈空，可每一次他都被孟弈空淡淡拒绝。'}),
    new Event('dialog', { speaker: '', text: '他远离尘世，不再出现在棋坛，独自隐居在书房。烛火微明，棋盘满布，黑白子错乱散落，像未竟的思绪......'}),
    
    // 小游戏F
    new Event('game', { data: 'minigameF' }),
    
    // 角色场景
    new Event('dialog', { speaker: '', text: '孟弈空的发须早已花白，眼神却依旧锐利，死死凝视着眼前的棋局。'}),
    new Event('dialog', { speaker: '孟弈空', text: '若谷……十年了，我依旧没有走出这棋盘。', sprite: '../../../main_page/image/character/yikong.png'}),
    
    // 结尾旁白
    new Event('dialog', { speaker: '', text: '他的世界，只剩棋。却再无人能劝他抬头，看一看棋盘之外的风月。'})
];

export { scene1Events7 };