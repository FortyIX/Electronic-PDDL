
 var imported = document.createElement('script');
 imported.src = 'src/pddlProcess.js';
 document.head.appendChild(imported);
    
//document.getElementById('submit-btn-style').addEventListener('click',() =>{process()})

   function process(){
   df = editor.getValue()
   pf = editor2.getValue()

   //console.log(df)

   var process = new PddlProcess(df,pf)
   
}
