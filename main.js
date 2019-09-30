const {app, Menu, BrowserWindow} = require('electron')
const path = require('path')

// entry page 
let firWin,firmenu

function initWindow() {
   firWin = new BrowserWindow({
       width: 1120,
       height: 850,
       resizable: false
   })    

   firWin.loadFile('index.html');
   
   configAppMenu();
  }


 function initSettings(){

 }

app.on('ready', initWindow)


app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (firWin === null) initWindow()
  })

  function configAppMenu(){

    if(process.platform == 'darwin'){
      
      firmenu = Menu.buildFromTemplate([
        {
           label: '',
           submenu:[
              {label: 'About'},
              {label: 'Exit'},]
        },
        {
          label: 'File',
          submenu:[
             {label: 'Save'},
             {label: 'Load'},]
       }]);
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

