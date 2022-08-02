var register = document.querySelector("#register");

register.addEventListener("submit", (e) => {

  var user = document.querySelector("#user").value.trim();
  var email = document.querySelector("#email").value.trim();
  var password = document.querySelector("#password").value.trim();

  e.preventDefault();
  let a = 0;

  if (user == "" || email == "" || password == "") {
    alert("Filling All Inputs!");
  } 
  else {
    //Check User Name
    if (user.substring(0, 1) != user.substring(0, 1).toUpperCase()) {
    
      document.querySelector("#user").classList.add("active-worning");
      document.querySelector('#user-worning').innerHTML='The first letter must be capitalized'
    } else {
      a++;
      document.querySelector("#user").classList.add("active-success");
      document.querySelector('#user-worning').innerHTML=''

    }
    //Check Email
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex.test(email) == false) {
      
      document.querySelector("#email").classList.add("active-worning");
      document.querySelector('#email-worning').innerHTML='Mail is not correct variant'

      
    } else {
        a++;
        document.querySelector("#email").classList.add("active-success");
      document.querySelector('#email-worning').innerHTML=''

    }
    //Check Password
    if (password.length < 6) {
      
      document.querySelector("#password").classList.add("active-worning");
      document.querySelector('#password-worning').innerHTML='Password must be longer than 6 characters'

    } else {
        a++;
        document.querySelector("#password").classList.add("active-success");
      document.querySelector('#password-worning').innerHTML=''

    }
    
    if (a == 3) {
      alert("Created Acount");
      
    }
  }
  
});
