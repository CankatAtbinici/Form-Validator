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


form.addEventListener("submit", function (x)  {
    checkFormElement ([name , lastName , userName , password , repassword , phoneNumber , email]);
    // passwordCOntrol(password.value , repassword.value);
    checkLenght(password , 15 , 7);
    emailValidator();
    checkPasswords(password.value , repassword.value)
    userNameLength(userName.value , 5 , 20);
    checkPhoneNumber(phoneNumber);
    nameFunny(name);
    lastNameFunny();
    x.preventDefault();

} )

//CHECH PASSWORDS SAME 
function checkPasswords (firstPassword ,secondPassword) {
    if (firstPassword !== secondPassword) {
        alert("passwords did not match");
        message[4].innerHTML = ("passwords did not match");
        message[4].setAttribute("class" , "message");
        error(password);
        error(repassword);
    }else if(firstPassword == secondPassword) {
        if( (firstPassword === "" )|| (secondPassword === "" ) ) {
            for(let a =3 ; a <5; a++) {
                message[a].innerHTML = "";
            } 
        }else{ 
                for(let i =3 ; i <5; i++) {
                 message[i].innerHTML = "password is OK !";
                 message[i].setAttribute( "class" , "greenText");
            }
        }
    }
}


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
 //CHECK USER NAMELENGTH CONTROL

 function userNameLength (input, minimum , maximum) {
     if ( input.length > maximum) {
         message[2].innerHTML = "max 20 character"
     } else if ( input.length < minimum) {
         message[2].innerHTML = "min 5 character"
     } else if (input.length < maximum && input.length > minimum || input.length == 5 || input.length == 20) {
         message[2].innerHTML = "valid Username";
         message[2].setAttribute("class" , "greenText");
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


// E MAİL VALİDATİON AND MESSAGES
function emailValidator () {
    if(validateEmail(email.value)) {
        message[6].innerHTML = ("valid e-mail address");
        message[6].setAttribute("class" , "greenText");
    }
    if(!validateEmail(email.value) ) {
        if(email.value == "") {
            message[6].innerHTML = ("Enter e-mail Adress")
        }else{
            message[6].innerHTML = ("Check your E-mail Adress");
            email.setAttribute("placeholder" , email.value + " is not a address")
        email.value = "";
        email.className = "error"}
    }
}

// SET ERROR CLASS
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
 //  CHECK PHONE NUMBER
function checkPhoneNumber (input) {

    regExp = /^\d{10}$/;
    if ( !regExp.test(input.value)) {
        if(phoneNumber.value == 0 ) {
            message[5].innerHTML = ("Enter a phone number")
        }else{
            message[5].innerHTML = ("invalid phone number");
            error(phoneNumber);
        }
    } else if( regExp.test(input.value)) {
        message[5].innerHTML = ("valid phone number");
        message[5].setAttribute("class", "greenText");
        }  
        
}

//Every system needs some funny we do that with name of user :) 

function nameFunny (i) {
    if (name.value.length !== 0) {
        message[0].setAttribute("class" , "greenText")
        message[0].innerHTML = (" What a beatiful name " + i.value + " :)") 
    }
}

function lastNameFunny (i) {
    if(lastName.value.length !== 0) {
        if (lastName.value === "Atbinici") {
            message[1].innerHTML = ("May be we relative each other :) ")
            message[1].setAttribute("class" , "greenText") 
        }else{
            message[1].setAttribute("class" , "greenText") 
            message[1].innerHTML = ("I think we are not relative :) ")}  
    } 
}













  





       










