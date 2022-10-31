function changeOption(x){
var myRequest;  
myRequest = new XMLHttpRequest();
    
myRequest.onreadystatechange = function(){
var izbran = document.getElementById("select");
var tekst = izbran.options[izbran.selectedIndex].value;
    
    if (myRequest.readyState === 4) {
        var lice = JSON.parse(myRequest.responseText);
        var listaHTML = "";
       for(i in lice) {
           if (lice[i].grad == tekst){
            listaHTML += "<tr>";
            listaHTML += "<td>" + lice[i].ime + "</td>";
           listaHTML += "<td>" + lice[i].prezime + "</td>";
           listaHTML += "<td>" + lice[i].telefon + "</td>";
           listaHTML += "<td>" + lice[i].grad + "</td>";
            listaHTML += "</tr>";
        }
       }
        document.getElementById('tbody').innerHTML = listaHTML;
    }
}


myRequest.open('GET','grad.json',true);
myRequest.send(null);
}