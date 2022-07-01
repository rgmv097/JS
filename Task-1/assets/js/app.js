
var time=new Date();
var saat=time.getHours();
if(saat<6 || saat>20){
    document.body.style.backgroundColor= 'black'
    alert("Axshaminiz xeyir") 
}
else if(saat>=6 && saat<12){
    document.body.style.backgroundColor ='pink'
    alert("Sabahiniz Xeyir")

    }else
{
    document.body.style.backgroundColor='blue'
    alert("Gunortaniz Xeyir")
}