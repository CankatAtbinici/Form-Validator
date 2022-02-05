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
let message = document.querySelectorAll("td.message");


console.log(message);


form.addEventListener("submit", function (x)  {
    checkFormElement ([name , lastName , userName , password , repassword , phoneNumber , email]);
    // passwordCOntrol(password.value , repassword.value);
    checkLenght(password , 15 , 7);
    emailValidator();
    x.preventDefault();
} )

//CHECH PASSWORDS SAME 

 /*
 function passwordCOntrol(first , second) {
 } */




//Chech PassWords Lenght
function checkLenght (input , maximum, minimum ){
        if (input.value.length < minimum) {
                        if(input.value.length === 0) {
                            message[3].innerHTML = "";
        }                else{message[3].innerHTML = ("Min 8 character")} 
        } else if (input.value.length> maximum) {
            message[3].innerHTML = ("Max 15 character")
        } else if (input.value.length> minimum && input.value.length<maximum){
            message[3].innerHTML = "";
        }
 }


// İS EMAİL REAL VALİDATOR
//Regexp from : https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript 
function validateEmail(stringData) {
    return String(stringData)
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}



function emailValidator ( ) {
    if(!validateEmail(email.value) ) {
        alert("Check your E-mail Adress");
        email.value = "";
        email.className = "error"
    }
}
function error (i) {
    i.className = "error";
}
// checking no empty space in form // Used forEach but other method staying comment under the this function
function checkFormElement(e) {
    e.forEach(function (input) {
        if(input.value === ""){
            error(input);
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

 















  





       










