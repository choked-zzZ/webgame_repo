// utils.js

// 获取DOM元素
export function updateEvent(event, state) {
    const dialogBox = document.querySelector('.dialog-box');
    const gameContainer = document.getElementById('game-embed-container');
    const gameContent = document.querySelector('.game-content');
    const speakerElement = document.getElementById('dialog-speaker');
    const textElement = document.getElementById('dialog-text');
    const spriteElement = document.getElementById('character-sprite');

    // 统一处理背景图
    if (event.background) {
        document.body.style.backgroundImage = `url(${event.background})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
    }

    if (event.type === 'dialog') {
        // 退出游戏状态，通过传入的 state 对象来修改
        state.isInGame = false;

        // 显示对话区域，隐藏游戏容器
        // 使用 'flex' 来保持原有的布局
        dialogBox.style.display = 'flex';
        gameContent.style.display = 'flex';
        gameContainer.style.display = 'none';

        const { speaker, text, sprite } = event.data;

        // 隐藏所有元素以实现淡入效果
        speakerElement.style.opacity = '0';
        textElement.style.opacity = '0';
        spriteElement.style.opacity = '0';

        // 延时更新内容，确保淡入效果平滑
        setTimeout(() => {
            speakerElement.textContent = speaker;
            textElement.textContent = text;
            speakerElement.style.opacity = '1';
            textElement.style.opacity = '1';

            // 根据事件数据决定是否显示立绘
            if (sprite) {
                spriteElement.style.backgroundImage = `url(${sprite})`;
                spriteElement.style.opacity = '1';
            } else {
                spriteElement.style.backgroundImage = 'none'; // 清除背景图
                spriteElement.style.opacity = '0';
            }
        }, 300);

    } else if (event.type === 'game') {
        if (event.data === 'GameA') {
            // 进入游戏状态，通过传入的 state 对象来修改
            state.isInGame = true;

            // 隐藏对话区域和立绘
            dialogBox.style.display = 'none';
            spriteElement.style.opacity = '0'; // 隐藏立绘
            spriteElement.style.backgroundImage = 'none'; // 清除立绘背景图

            // 显示游戏容器
            gameContent.style.display = 'none';
            gameContainer.style.display = 'flex';
            gameContainer.innerHTML = `<iframe src="../lightgame/GameA/lightgame.html" frameborder="0"></iframe>`;
            // AJAX加载另一个网页内容
            // fetch('../lightgame/GameA/lightgame.html')
            // .then(response => response.text())
            // .then(html => {
            //     gameContainer.innerHTML = html;
            //     // 添加延迟确保DOM就绪后再处理脚本
            //     setTimeout(() => {
            //         const gameContent = gameContainer.querySelector('.game-container');
            //         if (gameContent) {
            //             gameContent.style.width = 'auto';
            //             gameContent.style.maxWidth = '700px';
            //             gameContent.style.height = '100%';
            //             gameContent.style.boxSizing = 'border-box';
            //             gameContent.style.display = 'flex';
            //             gameContent.style.flexDirection = 'column';
            //             gameContent.style.alignItems = 'center';
            //             gameContent.style.justifyContent = 'center';
            //         }
            //         // 处理动态加载的脚本
            //         const scripts = gameContainer.querySelectorAll('script');
            //         scripts.forEach(oldScript => {
            //             const newScript = document.createElement('script');
            //             Array.from(oldScript.attributes).forEach(attr => {
            //                 newScript.setAttribute(attr.name, attr.value);
            //             });
            //             let scriptContent = oldScript.textContent;
            //             scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded',\s*function\(\)\s*\{/, '').replace(/\}\);/g, '');
            //             newScript.textContent = scriptContent;
            //             oldScript.parentNode.replaceChild(newScript, oldScript);
            //         });
            //         // 动态添加CSS链接
            //         const link = document.createElement('link');
            //         link.rel = 'stylesheet';
            //         link.href = '../lightgame/GameA/lightgame.css';
            //         link.id = 'game-stylesheet';
            //         document.head.appendChild(link);
            //     }, 0);
            // })
            // .catch(error => {
            //     gameContainer.innerHTML = '<div class="error">无法加载游戏内容</div>';
            //     console.error('加载失败:', error);
            // });
        }
    }
}

// 获取指定索引的事件
export function getEvent(index, events) {
    if (index >= 0 && index < events.length) {
        return events[index];
    }
    return null;
}