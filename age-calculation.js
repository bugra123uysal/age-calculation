




/* hesapla */


/* bugünün tarihi */
 var  bgntrh=document.getElementById("bugün").innerHTML=new Date()

function hsp(){
var gır=document.getElementById("tarih").value;    
let years=bgntrh.getFullYear() - gır.getFullYear();
let mont=bgntrh.getMonth() - gır.getMonth();
 document.getElementById("guncel").innerHTML=years 
}



    
