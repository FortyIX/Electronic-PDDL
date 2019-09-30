

function updateUI(res){
    var resP = document.getElementById("detail-result-display-card").innerHTML

    for(i=0; i<10; i++){
        document.getElementById("detail-result-display-card").innerHTML+="<button onclick=\"hello()\">link</button><br>";  
    }
    console.log(resP)
    
}

function hello(){
 
    console.log("get lost JS ")
}