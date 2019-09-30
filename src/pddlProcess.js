var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var imported = document.createElement('script');
 imported.src = 'src/mainPageUpdate.js';
 document.head.appendChild(imported);


class PddlProcess{
    

    constructor(df,pf){
        $.ajax( {url: "http://solver.planning.domains/solve-and-validate",
                type: "POST",
                contentType: 'application/json',
                data: JSON.stringify({"domain": df,
                                      "problem": pf})})
                  .done(function (res) {
                 if (res['status'] === 'ok') {
                 window.alert('Plan found!');
                 } else {
                  window.alert('Planning failed.');
                  }
                console.log(res);
                updateUI(res);

               });
         }


       
}

