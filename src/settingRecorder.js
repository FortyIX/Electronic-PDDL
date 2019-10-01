
 var imported = document.createElement('script');
 imported.src = '../main.js';
 document.head.appendChild(imported);

class SettingRecorder{
    
    constructor(configs){
        
        const savePath = runPath = require('electron').app.getPath('userData');
        this.path =path.join(savePath,configs.name+'.json')
        this.data = readData(this.path, configs.defaults)
   }
   
   get(key){return this.data[key]} 

   set(key,value){
       this.date[key] = val;
       fs.writeFiileSync(this.path,JSON.stringify(this.data));
   }
}

function readData(fpath, defaults)
{

    try{
        return JSON.parse(fs.readFileSync(fpath));

    }catch(e){
        return defaults; 
    }


}

