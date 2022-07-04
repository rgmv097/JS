var site=document.body;
function Confirm() {
    var text = "select Ok or Cancel";
  if (confirm(text) == true) {
   site.style.opacity='1';
  } else {
    site.style.opacity='0';
  }
}