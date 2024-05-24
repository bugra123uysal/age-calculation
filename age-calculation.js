




/* hesapla */


/* bugünün tarihi */

function hsp(){
const  bgntrh= document.getElementById("tarih");
const  history=new Date(bgntrh.value);
const today=new Date();


 
const age =today.getFullYear() - history.getFullYear();
const month=today.getMonth() -  history.getMonth();

if(month < 0 ||(month === 0 && today.getDate()< history.getDate() )){
    age--;
}



 document.getElementById("guncel").textContent= age

}



    
