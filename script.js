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





form.addEventListener("submit", function (x)  {
    checkFormElement ([name , lastName , userName , password , repassword , phoneNumber , email]);
    // passwordCOntrol(password.value , repassword.value);
    x.preventDefault();
    emailValidator();

} )

// İS EMAİL REAL VALİDATOR
//Regexp from : https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript 
const validateEmail = (stringData) => {
    return String(stringData)
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



function emailValidator ( ) {
    if(!validateEmail(email.value) ) {
        alert("Check your E-mail Adress");
        email.value = "";
        email.className = "error"
    }
}



// checking no empty space in form // Used forEach but other method staying comment under the this function
function checkFormElement(e) {
    e.forEach(function (input) {
        if(input.value === ""){
            input.className = "error";
            input.setAttribute("placeholder" , "Required Space")
         }else{
             input.className = "success";
           
         }
    })
}

        /*
//if no data or wrong data in form area = bordercolor going to be red and alert 
//LONG WAY

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
}else if (!validateEmail(email.value)){
    alert("Check your E-mail Adress");
}else{
    email.className = "";
}

e.preventDefault();
}) */

 





 /*
 function passwordCOntrol(first , second) {
    console.log(first );
    console.log(second);
         if ((first) != ( ı )) {
            console.log("sifreler eşleşmedi");
       } else if ((first) === (second )){
           console.log("şifreler eşleşti");
       }
 } */







  
 





       










