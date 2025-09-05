import { Event } from '../../../js/model.js';

// 分支2剧情 - 程若谷葬礼
const scene3Events6 = [
    // 开场旁白
    new Event('dialog', { speaker: '', text: '比赛的落败，让孟弈空心神俱碎。可更让他措手不及的，是程若谷病情的急转直下。短短数周，心脏衰竭便将她彻底夺走。'}),
    new Event('dialog', { speaker: '', text: '葬礼那天，天阴如墨，细雨淅沥。'}),
    new Event('dialog', { speaker: '', text: '灵堂内，檀香袅袅。黑白照片中，程若谷的笑容温柔宁静，仿佛仍在轻声劝慰。'}),
    
    // 角色场景
    new Event('dialog', { speaker: '', text: '孟弈空静静立在灵柩前，一身素衣，神色木然。四周亲友低声抽泣，唯有他一言不发，眼中没有泪，只有空洞。'}),
    new Event('dialog', { speaker: '', text: '萧之平默默守在一旁，几次欲开口安慰，却终究没有说出口。'}),
    
    // 结尾旁白
    new Event('dialog', { speaker: '', text: '风雨声敲打着灵堂的纸幔，像是一场无声的挽歌。孟弈空的手紧紧攥着袖口，指节泛白，却始终未曾伸向那口棺木——他不敢。'})
];

export { scene3Events6 };