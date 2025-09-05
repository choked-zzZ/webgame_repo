import { Event } from '../../js/model.js';

const scene2Events4 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '书房内，棋盘散落，黑白子交错凌乱。孟弈空的眼神中布满血丝，仍在反复推演棋局。'}),
    
    // 跳转minigameC，失败则重新开始本场景
    new Event('game', {
        data: 'minigameC',
        // retryOnFailure: true, // 自定义属性，标记失败后重新开始
        // sceneRestartIndex: 0 // 本场景起始事件索引
    }),
    
    // 程若谷与孟弈空对话
    new Event('dialog', { speaker: '', text: '程若谷端着一碗药走进来，眉头紧皱。'}),
    new Event('dialog', { speaker: '程若谷', text: '你已经三天没合眼了！你这样下去，不是棋会毁了你，而是你自己先倒下。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '再给我一点时间！那个人的棋，我必须找到破解的方法！只要我能赢，就一切都值得。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '赢？你眼里只有赢吗？你有没有想过我？想过我们的生活？难道我在你心里，比不上那一盘棋吗？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '程若谷，我不是不在乎你……可是如果连这一步都走不下去，我的人生就彻底没意义了！', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '人生的意义，难道只剩下输赢了吗？你看不到我在你身边等你吗……', sprite: 'character.png'}),
    
    // 跳转minigameB，通过后继续剧情
    new Event('game', { data: 'minigameB' }),
    
    // 结尾旁白
    new Event('dialog', { speaker: '', text: '孟弈空只觉胸口一阵剧烈抽痛，眼前骤然一黑。棋子散落在地，他的身体终于不堪重负，重重倒下。程若谷惊呼着扑上前去。'})
];

export { scene2Events4 };