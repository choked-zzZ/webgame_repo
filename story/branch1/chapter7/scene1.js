import { Event } from '../../../js/model.js';

// 分支1剧情 - 王澹锋的挑战信
const scene1Events7 = [
    // 旁白段落1
    new Event('dialog', { speaker: '', text: '时光如水，季节悄然更替。孟弈空陪伴在程若谷身侧的日子，平淡却温柔。她的笑容也一天天多了起来。日子仿佛终于回归了寻常，连围棋，都不再是压在心头的沉重，而只是茶余饭后的闲情。'}),
    
    // 旁白段落2
    new Event('dialog', { speaker: '', text: '然而，就在某个微凉的黄昏，孟弈空收到了一封信。'}),
    
    // 旁白段落3
    new Event('dialog', { speaker: '', text: '信封洁白，笔迹凌厉，字字锋锐，犹如剑痕。落款处，写着熟悉的名字——王澹锋。'}),
    
    // 信中内容
    new Event('dialog', { speaker: '', text: '（信中）弈空兄：久闻你已淡出棋坛，然棋道一途，岂能因时光而湮灭？近日湖心亭重修，棋桌仍在。愿与君对弈一局，以证真章。不见不散。——澹锋'}),
    
    // 旁白段落4
    new Event('dialog', { speaker: '', text: '孟弈空凝视良久，心中竟掠过一丝莫名的悸动。湖心亭……那是他梦境中无数次出现的所在，如今现实与幻象重叠，仿佛命运早已暗中布下棋局。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '程若谷', text: '弈空，你……会去吗？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '这是他亲手写的信。他在等我。湖心亭……也在等我。', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '程若谷', text: '可是，我怕……怕你再一次走不出来。', sprite: 'character.png'}),
    
    // 结尾旁白
    new Event('dialog', { speaker: '', text: '孟弈空垂下目光，片刻沉默。指尖划过信纸的锋锐笔痕，心中却仿佛响起了那清脆的一声落子。他知道，这一局，不只是与王澹锋的棋。'}),
    
    // 添加选择事件
    new Event('choice', {
        text: '玩家选择',
        options: [
            {
                text: '「赴约」接受王澹锋的邀请，前往湖心亭对弈？',
                nextEventIndex: -1,
                setFlags: { chapter7Scene1Choice: 'accept' }
            },
            {
                text: '「拒绝」婉拒邀请，暂且将围棋放在一边，享受与若谷的平淡生活？',
                nextEventIndex: 12,
                setFlags: { chapter7Scene1Choice: 'refuse' }
            }
        ]
    }),
    
    // 拒绝分支剧情
    new Event('dialog', { speaker: '', text: '孟弈空拿起王澹锋的邀请信，信纸上笔迹端正，字字如战鼓般敲打在心头。然而，他的目光很快落在程若谷身上——她正靠在窗边，阳光洒在她的发梢上，带着一抹温暖的光。'}),
    new Event('dialog', { speaker: '孟弈空', text: '澹锋在湖心亭等我，可我……不能走。', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '他深吸一口气，拿起笔，仔细写下回信。字迹沉稳，却带着不容置疑的坚定：'}),
    new Event('dialog', { speaker: '', text: '“澹锋，承蒙盛情邀请，实感荣幸。然而近期家中事务繁重，无法赴约。望君海涵。孟弈空敬上。”'}),
    new Event('dialog', { speaker: '', text: '写好信，他轻轻放下，仿佛卸下了心头一块重石。随后，他走到程若谷身边，将信折好，轻轻放在桌上。'}),
    new Event('dialog', { speaker: '孟弈空', text: '若谷，我婉拒了澹锋的邀请。我不想离开你，也不想再次被输赢束缚。', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '程若谷', text: '你选择的，是生活，而不是棋局。很好，我很高兴。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '从此，孟弈空不再奔波于比赛与名利之间。他每日陪伴程若谷散步、下棋、阅读，窗外光影随季节流转，屋内笑声盈满。也许棋盘之外的生活，才是他真正的归宿。'}),
    new Event('dialog', { speaker: '', text: '【解锁结局：棋盘之外的世界】'}),
    new Event('end', { data: 'good_ending' })
];

export { scene1Events7 };