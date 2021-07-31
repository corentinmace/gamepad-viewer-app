const { app, BrowserWindow, session, ipcMain } = require("electron")
const path = require('path')
const fs = require('fs')

let mainWindow
let backgroundColorSet

function createWindow () {

   mainWindow = new BrowserWindow({
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
 
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()

}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  fs.readFile(`${__dirname}/settings.txt`, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    backgroundColorSet = data
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('sendCookies', async (event) => {
  //console.log(`ipcMain.handle('sendCookies' : ${backgroundColorSet})`)
  return backgroundColorSet
})

ipcMain.on('print-color', (event, color) => {
  //console.log(`Color passed from the renderer: ${color}`)
  event.reply('color-status', color)
  fs.writeFileSync('settings.txt', color, 'utf-8')
})