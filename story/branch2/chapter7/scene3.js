import { Event } from '../../../js/model.js';

// 分支2结局 - 棋盘之外的人生
const scene3Events7 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '岁月悄然流逝，孟弈空再度醒来，心中怀念着程若谷，却不再被输赢束缚。围棋不再是人生的全部，而是生活的一部分——增长智慧、感受乐趣、与朋友分享的方式。'}),
    new Event('dialog', { speaker: '', text: '公园的小径上，落日余晖洒在湖面上，微风吹起杨柳的枝条，光影在棋盘与石凳之间跳动。棋坛上风云变幻，豪杰如过江之鲫，但年迈的孟弈空早已不再追逐王者之位。他每日在环湖公园里，与萧之平以及棋友们切磋棋技，闲谈风月，心境悠然。'}),
    
    // 场景发展
    new Event('dialog', { speaker: '', text: '某天，他在长椅旁的棋桌上收拾棋盘时，抬眼看见一个少年正目光炯炯地走来，手里还握着一副棋子。少年神情专注，双目犀利，仿佛眼里充满对胜利的渴望。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '孟弈空', text: '年轻人，我们来下盘棋吧。', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '少年', text: '没问题，我一定会赢你！', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '好，那就让我看看，你能走出怎样的棋路。', sprite: '../../../main_page/image/character/yikong.png'}),
    
    // 结尾
    new Event('dialog', { speaker: '', text: '风拂湖面，黑白棋子静静相对，胜负未分，却满溢生机与希望。'}),
    new Event('dialog', { speaker: '', text: '【解锁结局：棋盘之外，风月无边】'}),
    new Event('end', { data: 'enlightenment_ending' })
];

export { scene3Events7 };