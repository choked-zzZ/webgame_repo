import { Event } from '../../../js/model.js';

// 分支1剧情 - 噩梦后的对话
const scene3Events6 = [
    // 旁白段落1
    new Event('dialog', { speaker: '', text: '孟弈空猛然惊醒，额头渗着细密的汗珠，胸口剧烈起伏。'}),
    
    // 旁白段落2
    new Event('dialog', { speaker: '', text: '程若谷被惊动，从床上轻轻撑起身子，声音带着几分担忧。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '程若谷', text: '弈空……你又做噩梦了吗？', sprite: 'character.png'}),
    
    // 旁白段落3
    new Event('dialog', { speaker: '', text: '孟弈空转头望去，月光正从窗棂透入，映照在她清瘦却温柔的脸庞上。他的眼神有些迷离，梦境与现实在心头交错。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '孟弈空', text: '我……好像一直在与人对弈。棋盘无边无际，我走不出来。', sprite: '../../../main_page/image/character/yikong.png'}),
    
    // 旁白段落4
    new Event('dialog', { speaker: '', text: '程若谷伸手，轻轻覆上他的手背，指尖微凉，却带来几分安心。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '程若谷', text: '你不用独自挣扎。就算棋盘再大，也不该只有你一个人。', sprite: 'character.png'}),
    
    // 旁白段落5
    new Event('dialog', { speaker: '', text: '孟弈空凝视着她，眼底的紧绷逐渐松动。他缓缓呼出一口气，将棋子放回棋盒中，低声呢喃：'}),
    
    // 角色对话
    new Event('dialog', { speaker: '孟弈空', text: '若谷……有你在，我才觉得，这世间还有棋盘之外的光亮。', sprite: '../../../main_page/image/character/yikong.png'}),
    
    // 结尾旁白
    new Event('dialog', { speaker: '', text: '程若谷并未再多说什么，只是静静靠在他肩头。夜风透过窗户，吹散了残香的气息，房间里只剩下两人轻浅的呼吸声。'})
];

export { scene3Events6 };