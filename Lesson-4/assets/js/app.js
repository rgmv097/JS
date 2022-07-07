var btn = document.getElementById('btn1');

btn.addEventListener('click', function () {
  var value = document.getElementById('input').value
  value=value.substring(0,1).toUpperCase()+value.substring(1);
  var list = '';
  list = `
  <li class="user-list">
    <span>${value}</span>
    <button id="check" class="chck">Touch Me:)</button>
    <button id="dele" class="dele">X</button>
  </li>
  `
  document.getElementById('list').innerHTML += list

  userListButtonRemove();
  Decorotion();
})

function userListButtonRemove() {
  var buttons = document.querySelectorAll('.user-list .dele')
  console.log(buttons);
  
  for (var btn of buttons) {
    btn.addEventListener('click', (e) => {
      e.target.parentElement.remove()
    })
  }
}
function Decorotion(){

  var buttons = document.querySelectorAll('.user-list .chck')
  console.log(buttons);
  
  for (var btn of buttons) {
    btn.addEventListener('click', (e) => {
      
    var soz=e.target.previousElementSibling;
    if(soz.style.textDecoration==='none'){
      soz=soz.style.textDecoration='line-through';
    }
    else{
      soz=soz.style.textDecoration='none';
    }
    })
  }
}