import { Event } from '../../../js/model.js';

// 分支2剧情 - 湖心亭悟道
const scene2Events7 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '夜已深，书房里烛火摇曳。孟弈空靠在棋盘旁，不知何时沉沉睡去。棋子散落，映出一地黑白斑驳。'}),
    new Event('dialog', { speaker: '', text: '意识像被抽离般，他陷入了一片无边的黑白混沌。黑色与白色交错翻涌，仿佛无数棋子在空中漂浮，又像时间的碎片随风飘散。他感到自己被棋局吞没，每一步都无法回头，也无法预知。'}),
    
    // 跳转游戏G
    new Event('game', { data: 'minigameG' }),
    
    // 梦境场景
    new Event('dialog', { speaker: '', text: '渐渐地，混沌中出现了轮廓：远处的水面微微荡漾，白色的光点在黑色湖面上闪动。那似曾相识的湖心之亭的影子慢慢成形，木质的柱子与屋檐清晰可见，湖水映出柔和的月光。'}),
    new Event('dialog', { speaker: '', text: '老者早已坐在棋盘前，静静等候。'}),
    new Event('dialog', { speaker: '老者', text: '弈空，你走了这么久，仍旧徘徊于此。今日，我只问你一句：你是要拼尽全力，战胜我？还是抬眼望一望，棋盘之外的世界？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '棋盘在两人之间铺开，黑白分明。空气中仿佛凝固，只等孟弈空的抉择。'}),
    
    // 玩家选择事件
    new Event('choice', {
        text: '玩家选择',
        options: [
            {
                text: '「拼尽全力与老者对弈」',
                nextEventIndex: 12,
                setFlags: { chapter7Scene2Choice: 'play_game' }
            },
            {
                text: '「环顾四周，探索湖心之亭」',
                nextEventIndex: 20,
                setFlags: { chapter7Scene2Choice: 'explore' }
            }
        ]
    }),
    
    // 选择分支1 - 对弈
    new Event('dialog', { speaker: '孟弈空', text: '难道这就是终点吗？难道棋局的尽头，只剩胜负？', sprite: '../../../main_page/image/character/yikong.png'}),
    new Event('dialog', { speaker: '老者', text: '年轻人，棋局之外，还有世界。若只追求胜利，你会错过它。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空停下手中棋子，抬头望向湖心亭之外。雾气渐渐散去，亭子周围的湖面闪烁着月光的倒影，仿佛隐隐指引着一条未曾注意的小径。'}),
    new Event('dialog', { speaker: '孟弈空', text: '或许……我应该看看棋局之外的世界。', sprite: '../../../main_page/image/character/yikong.png'}),
    // new Event('dialog', { speaker: '', text: '（此时重新跳回到选择界面，只剩下另一个选项）'}),
    
    // 选择分支2 - 探索
    new Event('dialog', { speaker: '', text: '孟弈空的手指悬在棋子上，微微颤抖。空气仿佛凝固，他忽然停下动作，深吸一口气，缓缓抬眼。棋盘之外，湖心亭的木梁在月光下泛着冷白的光泽，四角微微摇曳着悬挂的风铃。'}),
    new Event('dialog', { speaker: '', text: '他移开视线，转身朝亭角望去。那里有一块古老的石碑，半掩在青苔与野藤之中，仿佛沉睡了千百年。月光斜斜洒下，将碑身勾勒出清冷的轮廓。走近时，苔藓间透出两个古拙的字迹——笔画遒劲而沧桑：'}),
    new Event('dialog', { speaker: '', text: '“䖝二”。'}),
    new Event('dialog', { speaker: '', text: '孟弈空缓缓走近石碑，指尖轻触粗糙的表面，心中却一片迷茫。他盯着那两个古拙的字，眉头紧蹙，却无法理解其中含义。心底涌起一种陌生的悸动——仿佛这些文字并非只为了棋局而存在，而是通向某种他未曾触及的境界。'}),
    new Event('dialog', { speaker: '老者', text: '弈空，不必急着去解读。先看看周围，感受风，听听水的声音。每一个细节，都可能告诉你棋盘之外的秘密。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空抬头望去，明月高悬，亭子在月光下安静而深邃，风铃微微摇晃，湖水泛起细碎波纹。他静默片刻，呼吸与夜风同步，心中慢慢涌起一种宁静的感受。石碑上的“䖝二”，仿佛在提醒他——棋局之外，还有更广阔的世界。'}),
    
    // 记忆闪回
    new Event('dialog', { speaker: '', text: '孟弈空闭上眼睛，呼吸与夜风同步，心中渐渐平复。他开始体会到，棋盘之外的世界也有自己的秩序与节奏，胜负只是其中一瞬的景象。'}),
    new Event('dialog', { speaker: '老者', text: '弈空，胜负之外……你可曾留意？', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '孟弈空坐在湖心亭的木椅上，微风拂过湖面，带起涟漪，也带起他心底的记忆。'}),
    new Event('dialog', { speaker: '', text: '他想起儿时与程若谷一起看星空的夜晚，头靠在他的肩上，轻声细语：“你记得我们第一次看星星吗？”那时，她笑得像孩子般纯真，将夜空比作天上的糖果。'}),
    new Event('dialog', { speaker: '', text: '他记起雨天在公园小桥上，她在他怀里微微颤抖，轻声说：“你觉得，雨天会让人特别寂寞吗？”'}),
    new Event('dialog', { speaker: '', text: '他记起厨房里的温馨，两人并肩做饭，笑声在温暖的灯光下交织。'}),
    new Event('dialog', { speaker: '', text: '这些片段在脑海中闪过，像一幅幅静谧的画卷，让他心头既温暖又痛楚。'}),
    
    // 程若谷幻象
    new Event('dialog', { speaker: '程若谷', text: '棋盘之外，还有风，还有月，还有我们眼前的夜空。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '记忆与现实交织，湖心亭的月光照在棋盘上，也照在他心底。片刻沉思后，他轻轻低语，仿佛自对自己说：'}),
    new Event('dialog', { speaker: '孟弈空', text: '風月……无边。', sprite: '../../../main_page/image/character/yikong.png'}),
    
    // 悟道结局
    new Event('dialog', { speaker: '', text: '四个字在夜风中回荡，湖面泛起金色光芒，黑白棋子缓缓升空，化作流光旋转，铺展开一条光的长廊。亭子四周的景象随之变幻，霞光镶边，风声、鸟鸣、水声汇成奇妙和声。'}),
    new Event('dialog', { speaker: '', text: '就在这时，那个梦中老者的身影出现在光影之间。他微微颔首，目光中透出欣慰，仿佛看到了他曾经的教诲，终于在孟弈空心中生根开花。'}),
    new Event('dialog', { speaker: '老者', text: '孟弈空，你终于明白了……风月无边，棋局之外，方为真境。', sprite: 'character.png'}),
    new Event('dialog', { speaker: '', text: '说罢，他身影渐渐变淡，像一缕轻烟般在夜风中飘散，最终消失在月光下。孟弈空感受到一股宁静的力量流入心中，他的胸中久积的压抑与执念仿佛被冲刷，眼前的湖水、霞光、棋子、夜空都化作无限可能。'}),
    new Event('dialog', { speaker: '', text: '风月无边，棋局之外，人生真正的广阔天地终于向他敞开。'}),
    new Event('end', { data: 'enlightenment_ending' })
];

export { scene2Events7 };