const { app, BrowserWindow, Menu, ipcMain } = require("electron")
const path = require('path')
const fs = require('fs')
const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'Help',
    submenu: [
      {
        label: 'Join Discord',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://discord.com/invite/nhvh8zeYdX')
        }
      },
      {
        label: 'Github',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://github.com/corentinmace/tournament-tweet-tool')
        }
      },
      {
        label: 'About ElectronJS',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }

    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

let mainWindow
let backgroundColorSet

function createWindow () {

   mainWindow = new BrowserWindow({
    titleBarStyle: 'show',
    icon: 'favicon.ico',
    width: 1000,
    height: 1000,
    resizable: false,
    alwaysOnTop: false,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
    }
  })
 
  mainWindow.loadFile('index.html')
  //mainWindow.webContents.openDevTools()

}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  let rawsettings = fs.readFileSync(`${__dirname}/settings.json`);
  let settings = JSON.parse(rawsettings);
  console.log(settings.color)
  backgroundColorSet = settings.color
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
  let color_setting = {
    color: color
  }
  fs.writeFileSync(`${__dirname}/settings.json`, JSON.stringify(color_setting, null, 4), 'utf-8')
})