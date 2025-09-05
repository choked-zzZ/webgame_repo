// 状态机 - 管理事件状态
import { events } from './data.js';
import { Event } from './model.js';
import { updateEvent, getEvent} from './utils.js';
import { saveManager } from './saveManager.js';

// 新增分支事件数组引用
import { scene5Events5A } from '../story/chapter5/scene5A.js';
import { scene5Events5B } from '../story/chapter5/scene5B.js';

// 扩展State对象
const State = {
    currentEventIndex: 0,
    isInGame :false,
    currentChapter: '',
    currentScene: '',
    branchEvents: null,
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
        },
    
    // 检查条件标志
    checkRequiredFlags: function(requiredFlags) {
        if (!requiredFlags) return true;
        const flags = saveManager.getStoryFlags();
        return Object.keys(requiredFlags).every(key => 
            flags[key] === requiredFlags[key]
        );
    },
    
    // 获取下一个事件数组
    getNextEventArray: function(choice) {
        // 根据选择和标志决定分支
        if (choice.setFlags.chapter5Scene4Choice === 'abandon_match') {
            return scene5Events5A;
        } else {
            return scene5Events5B;
        }
    }
};

    // 显示下一个事件
    function nextEvent() {
        const currentEvent = getEvent(State.currentEventIndex, State.branchEvents || events);
        
        // 如果是选择事件，处理条件逻辑
        if (currentEvent && currentEvent.type === 'choice') {
            // 查找第一个可用选项
            const validOption = currentEvent.options.find(option => 
                State.checkRequiredFlags(option.requiredFlags)
            );
            
            if (validOption) {
                // 设置标志
                saveManager.setStoryFlags(validOption.setFlags);
                
                // 获取下一个分支事件数组
                State.branchEvents = State.getNextEventArray(validOption);
                
                // 重置事件索引
                State.currentEventIndex = 0;
                updateEvent(getEvent(0, State.branchEvents), State);
                return;
            }
        }
        
        // 现有逻辑
        State.incrementIndex();
        if (State.currentEventIndex < (State.branchEvents || events).length) {
            updateEvent(getEvent(State.currentEventIndex, State.branchEvents || events), State);
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