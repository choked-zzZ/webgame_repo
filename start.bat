@echo off
:: 设置窗口标题
title Yimeng Game Server

:: 检查 Python 是否安装
python --version >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not in PATH.
    echo Please install Python to run this server.
    pause
    exit
)

echo Starting local server...

:: 在一个新的窗口中以后台模式启动 Python HTTP 服务器，监听 8000 端口
:: "start" 命令会让服务器在新窗口运行，脚本可以继续执行下一步
start "Yimeng Server" python -m http.server 8000

:: 等待1秒，确保服务器有足够的时间启动
timeout /t 1 /nobreak >nul

echo Opening game in browser...
:: 使用 start 命令打开默认浏览器并访问主页
start http://localhost:8000/index.html

echo Server is running. Close the new black command window to stop the server.