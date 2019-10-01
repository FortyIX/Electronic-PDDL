 

const {app, Menu, BrowserWindow} = require('electron')
const path = require('path')
const SettingRecorder =  require('./src/settingRecorder')

debugger

// entry page 
let firWin,firmenu,firSet
let bgImg

function initWindow() {
   firWin = new BrowserWindow({
       width: 1120,
       height: 850,
       resizable: false,
       webPreferences: {
        nodeIntegration: true
    }
   })    
   firWin.webContents.openDevTools()
   
   // not working with darwin
   //firWin.loadFile(path.join('file://', __dirname,'index.html'))
   firWin.loadFile('index.html')
   
   configAppMenu();
   initSettings();
  }


app.on('ready', initWindow)


app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (firWin === null) initWindow()
  })



function initSettings(){
     
  const store = new SettingRecorder({
    name: 'bg-image',
    defaults: {
      background: {image:'file://path-to-your-file/image.png'}
     }
  });
  

   console.log(store.get('background'))

     

}
 



function configAppMenu(){

    if(process.platform == 'darwin'){
      
      firmenu = Menu.buildFromTemplate([
        {
           label: '',
           submenu:[
              {label: 'About'},
              {label: 'Exit'},
              {label: 'Setting', click(){onOpenSetting()}}]
        },
        {
          label: 'File',
          submenu:[
             {label: 'Save'},
             {label: 'Load'},
            ]
        },
        {
          label: "Edit",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
        
        
          
        
      
      ]);
     }
     else{
      firmenu = Menu.buildFromTemplate([
        {
           label: 'File',
           submenu:[
              {label: 'Save'},
              {label: 'Load'},
             ]
        }
      ])
     }
    Menu.setApplicationMenu(firmenu);
   }


function onOpenSetting(){
  
  
 
    firSet = new BrowserWindow({
        height: 400,
        width: 400,
        webPreferences: {
          nodeIntegration: true
      }
    })
    firSet.webContents.openDevTools()
    // not working with darwin
    // firSet.loadFile(path.join('file://',__dirname,'page/setting.html'))
    firSet.loadFile('page/setting.html')
    
}


