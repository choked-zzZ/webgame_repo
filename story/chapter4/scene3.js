import { Event } from '../../js/model.js';

const scene3Events4 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '还是那片无边的棋盘，黑白交错，虚实难辨。亭子居于湖心，万籁俱寂，仿佛天地间只有棋声与呼吸。一旁矗立着一块石碑，上面的字迹模糊难辨。'}),
    new Event('dialog', { speaker: '', text: '老者静静坐在对面，手中执白。他看向孟弈空，目光深邃，仿佛能穿透他的内心。'}),
    
    // 老者与孟弈空对话
    new Event('dialog', { speaker: '老者', text: '你又回来了。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '是。因为我必须变得更强。那个人……他像一座无法逾越的山。', sprite: '../../main_page/image/character/yikong.png'}),
    
    new Event('dialog', { speaker: '', text: '棋盘上黑子疾落，声声如擂鼓。孟弈空的手指微微颤抖，他的呼吸随着落子越来越急促。'}),
    new Event('dialog', { speaker: '老者', text: '你说的对手……果然与你心结相连。可你可曾想过，他与你真正的不同之处在哪里？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '不同之处？他比我更冷静，更敏锐……他不会犹豫。他像是……像是我无法企及的影子。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '老者', text: '或许，他并非你的影子，而是镜子。你所看到的，不只是他，还有你自己。', sprite: 'character.png'}),
    
    new Event('dialog', { speaker: '', text: '棋盘上的局势逐渐复杂起来，孟弈空一边落子一边凝视棋局，却觉得无论如何都被逼入险境。老者的棋路熟悉又陌生，竟与那位对手极为相似。'}),
    new Event('dialog', { speaker: '孟弈空', text: '这感觉……和那一战一模一样……', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '老者', text: '输与赢，不过是棋盘上的一瞬。真正困住你的，并非他人的棋力，而是你心中的执念。', sprite: 'character.png'}),
    
    new Event('dialog', { speaker: '', text: '棋声渐远，天地开始模糊。孟弈空的心中，那个强大对手的身影与老者的棋局渐渐重叠在一起，像是同一个谜团，压得他几乎透不过气。'}),
    new Event('dialog', { speaker: '', text: '棋局进入僵持。黑白之间，仿佛无路可退。老者的目光如深渊，静静等待着孟弈空的回应。'}),
    new Event('dialog', { speaker: '老者', text: '那么，告诉我——你想在这盘棋里寻找什么？', sprite: 'character.png'}),
    
    // 添加三个选择选项
    new Event('choice', {
        text: '玩家选择',
        options: [
            {
                text: '答应程若谷的请求',
                nextEventIndex: -1,
                setFlags: { chapter4Scene3Choice: 'promise_rest' }
            },
            {
                text: '坚持自己的执念',
                nextEventIndex: -1,
                setFlags: { chapter4Scene3Choice: 'insist_obsession' }
            }
        ]
    }),
    
    // 选择1分支 - 我要战胜他
    new Event('dialog', { speaker: '', text: '孟弈空目光炯炯，手指猛然落子。棋声清脆，却像是铁链锁在心头。'}),
    new Event('dialog', { speaker: '孟弈空', text: '我必须赢！不管是你，还是他，我绝不能输！', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '棋盘瞬间风云骤起，黑白子仿佛化作无数利刃，将孟弈空层层包围。'}),
    new Event('dialog', { speaker: '老者', text: '赢？你能承受失去一切的代价吗？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '话音未落，棋局陡然崩解，孟弈空仿佛感到胸口一阵压迫，额头冷汗涔涔，心跳如战鼓。'}),
    
    // 选择2分支 - 我要看清自己
    new Event('dialog', { speaker: '', text: '孟弈空缓缓落下一子，不再急切，只是凝视棋盘，仿佛透过黑白子看见自己的影子。'}),
    new Event('dialog', { speaker: '孟弈空', text: '我想明白……对手并非只有他，也是我自己。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '老者沉默片刻，嘴角泛起微不可察的笑意。'}),
    new Event('dialog', { speaker: '老者', text: '终于，你开始明白了。棋局之外，才是真正的天地。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '棋盘逐渐化作光影，四周寂静如初。孟弈空的心也罕见地平静下来。'}),
    
    // 选择3分支 - 我不知道……
    new Event('dialog', { speaker: '', text: '孟弈空的手悬在半空，却迟迟落不下。眼神空茫，呼吸急促。'}),
    new Event('dialog', { speaker: '孟弈空', text: '我……我不知道自己在追寻什么。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '老者静静凝望他，缓缓摇头。'}),
    new Event('dialog', { speaker: '老者', text: '迷失于执念者，必困于棋盘之中。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '棋盘开始崩裂，棋子坠落无声，化为漆黑的深渊。孟弈空心中涌起巨大的空虚，猛地惊醒。'})
];

export { scene3Events4 };