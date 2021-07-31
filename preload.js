const { contextBridge, ipcRenderer, contentTracing } = require('electron')

async function setupContextBridge() {
  const backgroundCookie = await ipcRenderer.invoke('sendCookies')

  contextBridge.exposeInMainWorld('electronInfo', {
    backgroundCookie
  })
}

setupContextBridge()

// ---------------


contextBridge.exposeInMainWorld(
  'myAPI',        
  {
    printNameToCLI: (color) => ipcRenderer.send('print-color', color)
  }
)

ipcRenderer.on('color-status', (event, message) => {
 const statusBanner = document.getElementById('background')
  const colorpicker_preload = document.getElementById("colorPicker")
  //console.log(message)
  statusBanner.style.backgroundColor = message
  colorpicker_preload.value = message

})

