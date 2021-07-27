const path = require('path')
const { app, BrowserWindow } = require('electron');
const fs = require('fs');

app.disableHardwareAcceleration()
let win

// function createWindow () {
//     const win = new BrowserWindow({
//         titleBarStyle: 'show',
//         icon: 'favicon.ico',
//         width: 900,
//         height: 800,
//         resizable: false,
//         alwaysOnTop: false,
//         webPreferences: {
//             preload: path.join(__dirname, 'preload.js'),
//             offscreen: true
//         }
//     })
   // win.webContents.openDevTools()
//}

app.whenReady().then(() => {
    win = new BrowserWindow({
        titleBarStyle: 'show',
        icon: 'favicon.ico',
        width: 900,
        height: 800,
        resizable: false,
        alwaysOnTop: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })
   // win.webContents.openDevTools()
    win.loadFile('index.html')
    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

