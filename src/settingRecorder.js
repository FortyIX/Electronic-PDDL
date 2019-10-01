
const fs = require('fs')
const path = require('path')


class SettingRecorder{
    
    constructor(configs){
        
        const savePath = require('electron').remote.app.getPath('userData');
        this.path =path.join(savePath,configs.name+'.json')
        this.data = readData(this.path, configs.defaults)
   }
   
   get(key){return this.data[key]} 

   set(key,val){
       console.log(val)
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

