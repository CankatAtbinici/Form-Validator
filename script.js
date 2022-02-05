// Let's create all path which we need
let form = document.getElementById("form");
let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let register = document.getElementById("register");
let submit = document.getElementById("submitBtn");


//if no data in form area bordercolor going to be red

function error (i) {
    i.className = "error"
  }

form.addEventListener("submit" , function(e) {
if(name.value === ""){
    error(name);
}else{
    name.className = ""
}
if(lastName.value === ""){
    error(lastName);
}else{
    lastName.className = ""
}
if(userName.value === ""){
    error(userName);
}else{
    userName.className = ""
}
if(password.value === ""){
    error(password);
}else{
    password.className = ""
}
if(repassword.value === ""){
    error(repassword);
}else{
    repassword.className = ""
}
if(phoneNumber.value === ""){
    error(phoneNumber);
}else{
    phoneNumber.className = ""
}
if(email.value === ""){
    error(email);
}else{
    email.className = ""
}

e.preventDefault();
})



//Regexp from : https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript 
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



  
 





       










