import { Event } from '../../js/model.js';

const scene2Events5 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '走廊里人声稀疏，阳光从长窗照进来，落在洁白的墙壁上。程若谷靠在病房门口的椅子上，面色苍白，手中攥着一方帕子。萧之平从另一侧走来。'}),
    
    // 角色对话
    new Event('dialog', { speaker: '萧之平', text: '他醒了。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '真的？他……他还好吗？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '萧之平', text: '虚弱，但情况稳定。第一句话就是问你。你在他心里，比比赛重要多了。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '程若谷听后愣住，低下头，轻轻抿唇。沉默良久，才缓缓开口。'}),
    new Event('dialog', { speaker: '程若谷', text: '我知道他心里有我……但我不想拖累他。萧之平，你明白吗？这场比赛对他太重要了，他准备了这么久。哪怕我在病床上……我也希望他能去。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '萧之平', text: '可他身体已经透支，心里还在挣扎。你希望他赢，但如果他倒在棋盘上呢？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '程若谷', text: '所以我才要你告诉他——去准备比赛，但一定要记得休息。棋局可以赢也可以输……可我不想再看到他这样把自己逼到绝路。', sprite: 'character.png'}),
    
    // 结尾旁白
    new Event('dialog', { speaker: '', text: '程若谷的声音微微颤抖，却带着一股从未有过的坚决。她明白，唯有自己才能劝动他，可她宁愿自己默默承受痛苦，也不愿剥夺他证明自己的机会。'})
];

export { scene2Events5 };