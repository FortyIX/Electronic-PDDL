
var obj

function updateUI(res){
    document.getElementById("detail-result-display-card").innerHTML= ""
    obj = res['result']['plan']
  

    for(var i=0; i<parseInt(res['result']['length']); i++){
        var value = "<button onclick=\"showDetail("+i+")\">"+i+'.'+' '+ obj[i]['name']+"</button><br>"
        document.getElementById("detail-result-display-card").innerHTML+=value 
    }
    
    
}

function showDetail(index){
document.getElementById("result-screen").innerHTML=obj[index]['action']
}