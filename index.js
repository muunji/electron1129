const {app, BrowserWindow} = require("electron")

//앱을 실행했을 때 열리는 새 창에 대한 값을 설정
const createWindow=()=> {
  const win = new BrowserWindow({
    width:800,
    heihgt:600,
  })
  //새 창에서 불러올 html 파일 경로
  win.loadFile("./public/index.html")
}

app.whenReady().then(()=>{
  createWindow()

  //macOS일 때 현재 열려있는 창이 없을 때에만 새로운 창을 여는 콜백 함수를 activate 이벤트에 등록
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

//window나 linux에서 모든 창이 닫히면 앱을 종료하도록 설정
app.on('window-all-closed',()=>{
  if(process.platform !== 'darwin') {
    //darwin은 macOS지칭
    app.quit();
  }
})