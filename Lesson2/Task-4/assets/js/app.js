function Group() {
var value = document.getElementById('input').value;
var text = document.getElementById('text');
 text.innerText = `${value}`
 var GR=value.substring(1,1);
 console.log(GR);
if(GR==1){
text.style.color='yellow';
}
else if(GR==2){
    text.style.color='red';
}
else if(GR==3){
    text.style.color='black';
}
}