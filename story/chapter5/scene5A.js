import { Event } from '../../js/model.js';

// 分支A：放弃比赛，陪伴若谷
const scene5Events5A = [
    new Event('dialog', { speaker: '', text: '（旁白）孟弈空深吸一口气，做出了决定。他轻轻握住程若谷的手，眼神坚定。'}),
    new Event('dialog', { speaker: '孟弈空', text: '若谷，比赛我不参加了。比起棋盘上的胜负，我更不想失去你。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '程若谷', text: '（眼眶湿润）弈空……你真的想好了吗？那是你准备了这么久的比赛……', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '想好了。以前我总以为赢了比赛才是人生的全部，现在才明白，你才是我真正的棋盘。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '（旁白）月光下，两人相视而笑。孟弈空终于放下了执念，感受着前所未有的平静。他知道，真正的胜利不是战胜对手，而是懂得珍惜眼前人。'})
];

export { scene5Events5A };