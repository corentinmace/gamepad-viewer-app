const path = require('path')
const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        titleBarStyle: 'show',
        icon: 'favicon.ico',
        width: 900,
        height: 800,
        resizable: false,
        alwaysOnTop: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
   // win.webContents.openDevTools()
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

