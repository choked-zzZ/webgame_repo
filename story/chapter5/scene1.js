import { Event } from '../../js/model.js';

const scene1Events5 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '阳光从窗帘缝隙斜斜照进来，落在泛白的被褥上。空气里弥漫着消毒水味。'}),
    new Event('dialog', { speaker: '', text: '孟弈空缓缓睁开眼，视线模糊中，他看到萧之平正守在床边。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '孟弈空', text: '之平……我这是……怎么了？', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '萧之平', text: '你昏倒了三天，医生说是过度劳累。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '萧之平', text: '还有一件事……若谷，她……突然病倒了。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '孟弈空', text: '什么？！她怎么了？', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '萧之平', text: '别急。医生怀疑是心脏问题，这几天她也在住院治疗。她醒来时第一个问的就是你，还哭了。', sprite: 'character.png'}),
    
    // 旁白
    new Event('dialog', { speaker: '', text: '孟弈空胸口像被重锤击中，呼吸急促。梦中的老者、棋盘、对手的身影和程若谷憔悴的脸庞交织在一起，让他几乎窒息。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '孟弈空', text: '我连她生病都没能在身边……我到底在执着些什么……', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '萧之平', text: '弈空，听我一句劝。比赛只剩两天，但若谷的身体……她比那场比赛重要得多。只有你能陪她。', sprite: 'character.png'})
];

export { scene1Events5 };