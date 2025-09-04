// 状态机 - 管理事件状态
import { events } from './data.js';
import { Event } from './model.js';
import { updateEvent, getEvent} from './utils.js';    
const State = {
    currentEventIndex: 0,
    isInGame :false,
    // 获取当前事件索引
    getCurrentIndex: function() {
        return this.currentEventIndex;
    },
    
    // 设置当前事件索引
    setCurrentIndex: function(index) {
        this.currentEventIndex = index;
    },
    
    // 增加事件索引并返回新值
    incrementIndex: function() {
            this.currentEventIndex++;
            return this.currentEventIndex;
        }
    };

    // 显示下一个事件
    function nextEvent() {
        State.incrementIndex(); 
        if (State.currentEventIndex < events.length) {
            updateEvent(getEvent(State.currentEventIndex,events), State);
        } else {
            updateEvent(new Event('dialog', { speaker: '系统', text: '所有事件已结束。' }), State);
        }
    };

    // 结束游戏并返回故事
    window.endGame = function() {
        State.isInGame = false;
        nextEvent();
    };

    // 监听鼠标左键点击事件
    document.addEventListener('click', function() {
        // 非游戏状态下才允许推进事件
        if (!State.isInGame) {
            nextEvent();
        }
    });

    // 监听空格键事件
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && !State.isInGame) {
            nextEvent();
            e.preventDefault();
        }
    });

    // 初始加载第一个事件
    updateEvent(getEvent(State.getCurrentIndex(),events),State);