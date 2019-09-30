const {app, BrowserWindow} = require('electron')
const path = require('path')

// entry page 
let firWin

function initWindow() {
   firWin = new BrowserWindow({
       width: 1120,
       height: 850,
       resizable: false
   })    
   firWin.loadFile('index.html')
   
  
   console.log(runPath)
}


 function initSettings(){

 }

 


app.on('ready', initWindow)

app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
  })
app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (firWin === null) initWindow()
  })



