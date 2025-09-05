import { Event } from '../../js/model.js';

// 第四章第一场事件 - 仅保留用户提供的内容
const scene1Events4 = [
    new Event('dialog', { speaker: '', text: '比赛的日子一天天逼近，孟弈空的神情渐渐紧绷。有时他整夜伏案推演，眼眶通红；有时他陪在程若谷身边，却心不在焉，眉头紧锁。家中弥漫着沉重的空气，棋盘与药香交织，压得人透不过气。这天午后，萧之平前来探望。书房的门紧闭，里面只有落子的脆响。客厅中，萧与程若谷低声交谈。'}),
    new Event('dialog', { speaker: '萧之平', text: '他又关在里面了吧？几天没合眼了。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '嗯，我早上端去的汤药，他连碰都没碰……', sprite: 'character.png'}),
    new Event('dialog', { speaker: '萧之平', text: '我劝过他。跟他说输赢不是一切，他也只是笑笑。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '风吹树叶，发出沙沙声，却掩不住两人话里的无奈。'}),
    new Event('dialog', { speaker: '程若谷', text: '我怕这样下去，他会垮掉。可每次我开口，他都避开，不愿听我多说。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '萧之平', text: '所以，只有你能劝得动他。对他来说，你不是旁人。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '程若谷低下头，指尖紧握衣角。她知道萧之平的话没有错，可这份重担落在她肩上，却让她心底一阵颤抖。透过庭院的门缝，她看见书房里昏黄灯光下的背影——孤独而固执。'})
];

export { scene1Events4 };