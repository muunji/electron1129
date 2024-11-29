const {app, BrowserWindow} = require("electron")

const createWindow=()=> {
  const win = new BrowserWindow({
    width:800,
    heihgt:600,
  })
  win.loadFile("./public/index.html")
}

app.whenReady().then(()=>{
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})