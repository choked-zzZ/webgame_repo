import { Event } from '../../../js/model.js';

// 分支2剧情 - 与王澹锋的棋局对决
const scene2Events6 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '赛场依旧肃静。灯光如同利剑般垂下，只照亮中央的棋桌。观众席稀稀落落，却没有一人敢发出多余的声响。空气仿佛凝固，只有心跳与呼吸在悄悄回荡。'}),
    new Event('dialog', { speaker: '', text: '孟弈空端坐在棋桌一侧，神色看似平静，实则手心已微微渗汗。对面，王澹锋缓步落座，目光如刀锋般锐利，带着某种不容忽视的威压。两人行礼，棋局由此展开。'}),
    new Event('dialog', { speaker: '', text: '第一子落下，在沉默中响得格外清晰。棋盘之上，黑白对峙，杀机暗涌。'}),
    new Event('dialog', { speaker: '', text: '（短暂沉默，几子已落）'}),
    
    // 王澹锋对话
    new Event('dialog', { speaker: '王澹锋', text: '孟，你的棋路依旧一往无前。但这一次，我不会留给你任何喘息的空隙。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '正好，我也不打算退让。', sprite: '../../../main_page/image/character/yikong.png'}),
    
    // 棋局中段
    new Event('dialog', { speaker: '', text: '随着棋局推进，场上气氛愈发凝重。每一次落子，都如同铁锤敲击在孟弈空的心头。他的脑海中闪过程若谷昨晚的话语：“棋盘之外，其实还有风、还有月……”'}),
    new Event('dialog', { speaker: '', text: '这一瞬，他的手指微微一顿。可王澹锋的棋子已经迅速落下，锋芒毕露，逼得他不得不全力应对。'}),
    new Event('dialog', { speaker: '', text: '棋局渐入中盘，黑白子在棋盘上激烈厮杀。孟弈空的手指悬在空中，却迟迟没有落子。对面，王澹锋目光如鹰，冷冷注视着他，每一步都紧逼咽喉。'}),
    new Event('dialog', { speaker: '', text: '他的心神却已渐渐游离。棋盘上的杀机，与脑海中浮现的画面交错重叠：'}),
    
    // 跳转游戏D
    new Event('game', { data: 'minigameD' }),
    
    // 内心挣扎
    new Event('dialog', { speaker: '孟弈空', text: '若谷……我却在这里和别人拼杀，而不是陪在你身边……', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '心念一乱，棋路顿时松动。王澹锋抓住机会，连下数子，迅速撕开防线，攻势如暴风骤雨般倾泻而下。'}),
    
    // 观众反应
    new Event('dialog', { speaker: '路人甲', text: '孟弈空今天似乎有些不对劲……不像他平日的沉稳。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '路人乙', text: '是啊，心神不宁。对手可是王澹锋，这样下去怕是危险。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '萧之平坐在人群中，双拳紧握，额角渗出冷汗。他看得出，孟弈空的注意力已经有点涣散，而这一局，任何一丝分心都可能致命。'}),
    
    // 棋局终盘
    new Event('dialog', { speaker: '', text: '棋局已近深处，棋盘上的局势越发险恶。王澹锋的棋风凌厉果决，如寒铁般无情。他几乎不给孟弈空喘息的余地，每一步都直指要害。'}),
    new Event('dialog', { speaker: '', text: '孟弈空紧盯棋局，额头渗出冷汗。他竭力寻找转圜的可能，可心神却始终不稳。'}),
    new Event('dialog', { speaker: '孟弈空', text: '若谷……', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '就在这短短的分神间，王澹锋毫不留情地落下一子。清脆的声响犹如丧钟，宣告着孟弈空大势已去。'}),
    
    // 胜负已分
    new Event('dialog', { speaker: '王澹锋', text: '孟，你的心不在棋上。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '这一刻，孟弈空心头一震。那份气势，如同梦中与老者对弈时的压迫感再度降临。不同的是，老者的气息像是深不见底的长河，而眼前的王澹锋，却像锋芒毕露的利刃，直刺他的心口。'}),
    new Event('dialog', { speaker: '孟弈空', text: '……', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '棋盘在他眼前逐渐模糊，他看到的不是黑白子，而是程若谷在病床前虚弱的笑容。心口的愧疚与悔意如同潮水般涌来，令他几乎透不过气。'}),
    new Event('dialog', { speaker: '', text: '萧之平的指节紧扣在木扶手上，心中焦灼。他明白，孟弈空正被两股力量撕扯——一边是赛场上残酷无情的棋局，一边是病床上静静等待他的程若谷。'}),
    new Event('dialog', { speaker: '', text: '终于，在王澹锋再一次凌厉的落子后，局势彻底倾覆。棋子清脆的声响，像最后一记重锤。'}),
    new Event('dialog', { speaker: '', text: '数子已毕，孟弈空负。'}),
    
    // 结局
    new Event('dialog', { speaker: '王澹锋', text: '你输了。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空的手指一颤，棋子从掌心滑落，沿着棋盘边缘滚落在地。失败已成定局，观众席陷入死寂。但他心中最沉重的，并不是这盘棋的输赢，而是自己未能陪在程若谷身边。'})
];

export { scene2Events6 };