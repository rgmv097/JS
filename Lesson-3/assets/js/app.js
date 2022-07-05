function Hesabla(){
 var meb= Number(document.getElementById('mebleg').value)
 var ay=Number(document.getElementById('ay').value)
 var faiz=Number(document.getElementById('faiz').value)
 
 var umumimebleg=meb+(meb*faiz/100)
 var ayliq=umumimebleg/ay;

 document.getElementById('meblegg').innerHTML=umumimebleg
 
}