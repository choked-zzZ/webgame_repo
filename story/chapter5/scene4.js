import { Event } from '../../js/model.js';

const scene4Events5 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '医院的走廊依旧安静，灯光在地板上映出长长的影子。程若谷的病情暂时稳定，医生允许她出来散散步。夜风轻拂，远处的月亮高悬，清辉洒落。孟弈空陪伴在程若谷身边，两人并肩走在医院附近的公园中。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '程若谷', text: '今晚的月色真美……你看，那些星子，仿佛一颗颗落在棋盘上的子，彼此呼应，却又各自孤立。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '嗯，像是一盘巨大的对局。可惜啊，没有人能把它下完。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '程若谷', text: '你总是想着下完、赢下、战胜。可你有没有想过——棋盘之外，其实还有风、还有月，还有我们眼前的夜空。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空愣了愣，心头微微一震，但很快又低下头，看着自己紧握的手。'}),
    new Event('dialog', { speaker: '孟弈空', text: '我……不能停下。明天的比赛，所有人都在等着我，我必须赢……', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '程若谷', text: '我明白。只是，答应我——无论输赢，你都要记得抬头看看棋盘之外的世界。那里，才是你真正该珍惜的地方。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '夜色深沉，月光淡淡地洒在两人身上。程若谷轻轻握住孟弈空的手，她的掌心微凉，却坚定。'}),
    new Event('dialog', { speaker: '', text: '此刻，孟弈空隐约生出一种复杂的感觉：他已经被棋盘束缚得太久。'}),
    new Event('dialog', { speaker: '', text: '在这个夜晚，孟弈空与程若谷并肩而行，仿佛一切输赢、喧嚣、棋局都消散在星空下。'}),
    
    // 添加新旁白
    new Event('dialog', { speaker: '', text: '忽然，一个念头在孟弈空心中浮现：是否放下比赛，全身心陪伴若谷好好养病？'}),
    
    // 添加条件选择事件
    new Event('choice', {
        text: '玩家选择',
        options: [
            {
                text: '是',
                nextEventIndex: -1, // 后续通过逻辑动态指定分支
                setFlags: { chapter5Scene4Choice: 'abandon_match' },
                // 条件判断元数据
                requiredFlags: {
                    chapter4Scene3Choice: 'understand_self',
                    chapter5Scene3Choice: 'promise_rest'
                }
            },
            {
                text: '否',
                nextEventIndex: -2, // 后续通过逻辑动态指定分支
                setFlags: { chapter5Scene4Choice: 'continue_match' }
            }
        ]
    })
];

export { scene4Events5 };