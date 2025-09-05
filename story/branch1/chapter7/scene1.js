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
    new Event('dialog', { speaker: '', text: '孟弈空垂下目光，片刻沉默。指尖划过信纸的锋锐笔痕，心中却仿佛响起了那清脆的一声落子。他知道，这一局，不只是与王澹锋的棋。'})
];

export { scene1Events7 };