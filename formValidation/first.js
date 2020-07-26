const name = document.getElementById('name')
const date = document.getElementById('date');
var pin = document.getElementById('pin');
var inp = document.getElementById('myInput');

// Form Blur Event listener
name.addEventListener('blur', validateName);
inp.addEventListener('blur', validatePassword);
date.addEventListener('blur', validateDate);
pin.addEventListener('blur', validatePin);

function validateName() {
    const re = /^[a-zA-Z]{2,}$/; 
    // console.log(re)
    if (re.test(name.value)){
        console.log(`${re.test(name.value)}`)
        return true
    }
    else{
        console.log('its false')
        return false
    }
}

function validatePin() {  
   if(pin.value.length < 4){
       console.log()
       return true
   }
   else{
       return false 
   }
}

pin.addEventListener('keypress', (e) => {
    // e.key.innerHTML = "a"
    var char = e.key
    console.log(`${char}`)
    var pinIsValid =  validatePin()
    var charRegex = /[0-9]|Backspace|#/;
    var charIsValid = charRegex.test(char)
    console.log(`${charIsValid}`)
    
    if (charIsValid && pinIsValid) {
        char.innerHTML = '4';
        return true
    }
    else {
        e.preventDefault()
        return
    }
 });

 pin.addEventListener('onchange', (e) => {
     pin.value
 }  )

function validateDate(e) {
    const re = /([0-9]{4})[/](0[1-9]|1[0-2])[/]([0-2]{1}[0-9]{1}|3[0-1])/;

    if (re.test(date.value)){
        console.log('good to go')
        return true
        // alert( 'follow the format');
    }
    else{
        console.log('follow the format')
        e.preventDefault();
    }
}

function validatePassword() {
    // // const re = /^([a-zA-Z]?[0-9]?\W+?)$/
    // const re = /^([a-zA-Z][0-9]?)$/; 
    // // const re = /\w+/(/\W+/)

    // if (!re.test(inp.value)){
    //     console.log('must contain letters and alphabets')
    //     // alert( 'must contain letters and alphabets');
    // }
    if(inp.value.length < 8){
        console.log('less than 8')
    }

    // return re
    // else if (re.test(inp.length > 7)) {
    //     console.log('should be upto 7')
    //     // alert('should be upto 7');
    // }
}
// const togglePassword = document.getElementById('toggle-btn')

// togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    // const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    // password.setAttribute('type', type);
    // toggle the eye slash icon
    // this.classList.toggle('fa-eye-slash'); 
// });

// secondFunction = (e) => {
//     console.log(`${e.key}`)
//     // pin = setTimeout(alertFunc, 3000)
//  }

function myFunction() {
    if (inp.type === "password") {
        inp.type = "text";
            }
    else {
        inp.type = "password";
        }
}

// function secondFunction() {
   
// }

// function validateForm() {
//     var fullname = document.myForm.name.value;
//     var password = document.myForm.password.value;
//     var pin = document.myForm.pin.value;
// }



   // pin.value = ' # '
    // pin = setTimeout (alertFunc, 1000)
    // // pin = setTimeout(alertFunc, 3000)



    // function validatePin() {
    //     const re = /^\d{4}$/;
    //     // this can replace the regex you wrote
    //     // input.value.length === 0
    //     // input.value.length === 0
    
    //     if (!re.test(pin.value)){
    //         // console.log('numbers only and must be upto 4')
    //         return false
    //     }
    //     else {
    //         return true
    //     }
    //     // return re.test(pin.value) 
    // }



        // const re = /^\d$/;
    // if (!re.test(pin.value)){
    //     // console.log('numbers only and must be upto 4')
    //     return false
    // }
    // else if(pin.value.length =< 4){
    //     return true
    // }
    // return re.test(pin.value) 

    // ANOTHER WAY TO VALIDATE NAME
        // if (!re.test(name.value)){
    //     console.log('must contain only letters')
    //     // alert( 'must contain only letters');
    // }
    // else{
    //     console.log(`${re}`)
    // }
    // return name;