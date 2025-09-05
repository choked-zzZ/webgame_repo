import { Event } from '../../js/model.js';

const scene3Events5 = [
    // 开场旁白与对话
    new Event('dialog', { speaker: '', text: '病房静谧，只听见仪器轻微的滴答声。孟弈空半倚在病床上，面色苍白，眼神却仍有些恍惚。萧之平推门而入，手里提着一壶刚打来的热水。'}),
    new Event('dialog', { speaker: '孟弈空', text: '之平……若谷呢？', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '萧之平', text: '她一直在楼上的病房休养。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空想挣扎着起身，却被萧之平按住肩膀。'}),
    new Event('dialog', { speaker: '萧之平', text: '别急着动。她让我转告你——好好准备比赛，但要注意休息。她说，不想再看到你把自己逼到绝路。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空怔住，双手紧紧攥着被角，呼吸急促。沉默良久，他低声开口。'}),
    new Event('dialog', { speaker: '孟弈空', text: '她明明自己……都已经这样了，还在担心我。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '萧之平', text: '是啊。弈空，你不是一个人。可你心里现在只有那盘棋，甚至把她都放在后面。你想过吗？如果你倒下了，她会怎么样？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '病房陷入寂静。孟弈空垂下头，眼神中闪烁着痛苦与动摇。他的呼吸一重一重，似乎在与自己撕扯。'}),
    new Event('dialog', { speaker: '', text: '这一刻，棋盘与爱人，在孟弈空的心里交织成无法调和的矛盾。他明白程若谷的用意，却也清楚自己无法轻易放弃那场关乎尊严的对弈。'}),
    
    // 添加两个选择选项
    new Event('choice', {
        text: '玩家选择',
        options: [
            {
                text: '答应程若谷的请求',
                nextEventIndex: -1,
                setFlags: { chapter5Scene3Choice: 'promise_rest' }
            },
            {
                text: '坚持自己的执念',
                nextEventIndex: -1,
                setFlags: { chapter5Scene3Choice: 'insist_obsession' }
            }
        ]
    }),
    
    // 选择1分支 - 答应请求
    new Event('dialog', { speaker: '', text: '孟弈空沉默许久，终于抬起头，语气带着疲惫却也温柔。'}),
    new Event('dialog', { speaker: '孟弈空', text: '好……我答应她。即便为了比赛，我也不能再这么下去了。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '', text: '萧之平愣了一下，露出欣慰的笑容。'}),
    new Event('dialog', { speaker: '萧之平', text: '这才像话。若谷一定会为你感到安心的。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '镜头转向窗外，夜色深沉。孟弈空闭上眼，仿佛终于卸下了一部分重担。虽然心中仍有紧张，但多了一丝平静。'}),
    new Event('dialog', { speaker: '', text: '或许，棋局并不是唯一的答案。真正的勇气，有时是学会停下脚步。'}),
    
    // 选择2分支 - 坚持执念
    new Event('dialog', { speaker: '', text: '孟弈空用力攥紧拳头，声音低沉却带着固执。'}),
    new Event('dialog', { speaker: '孟弈空', text: '我不能退。那个人的存在，让我无法容许自己松懈一分一秒。', sprite: '../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '萧之平', text: '你这脾气……迟早要出事。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空没有再回应，只是低下头，眼神落在一张棋谱上。他的手指颤抖，却一遍遍描摹棋子的落点。'}),
    new Event('dialog', { speaker: '', text: '执念如同枷锁，困住了孟弈空的心。他明白程若谷的担忧，却终究无法放下那份对胜利的渴求。'})
];

export { scene3Events5 };