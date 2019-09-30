
 var imported = document.createElement('script');
 imported.src = 'src/pddlProcess.js';
 document.head.appendChild(imported);
    
//document.getElementById('submit-btn-style').addEventListener('click',() =>{process()})

function onSubmit(){
   df = dEditor.getValue()
   pf = pEditor.getValue()
   //console.log(df)

   var process = new PddlProcess(df,pf)
}

function onReset(){
   dEditor.setValue('');
   pEditor.setValue('');
}
