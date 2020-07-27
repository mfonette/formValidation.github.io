const name = document.getElementById('name')
const date = document.getElementById('date');
var pin = document.getElementById('pin');
var inp = document.getElementById('myInput');

// TODO: Remove error message once field is valid

// function to validate name
function validateName() {
    const re = /^[a-zA-Z]{2,}$/; 
    // console.log(re)
    if (re.test(name.value)){
        name.classList.remove('is-invalid');
        console.log(`${re.test(name.value)}`)
        return true
    }
    else{
        name.classList.add('is-invalid');
        console.log('its false')
        return false
    }
}


//  function to validate the length of the pin
function validatePin() {
    console.log(e);
   if(pin.value.length < 4){
    pin.classList.add('is-invalid');
       console.log()
       return true
   }
   else{
    pin.classList.remove('is-invalid');
       return false 
   }
}


//  function to validate each pin entering the input field
pin.addEventListener('keypress', (e) => {
    // e.key.innerHTML = "a"
    var char = e.key
    console.log(`${char}`)
    var pinIsValid =  validatePin()
    var charRegex = /[0-9]|Backspace|#/;
    var charIsValid = charRegex.test(char)
    console.log(`${charIsValid}`)
    
    if (charIsValid && pinIsValid) {
        pin.classList.remove('is-invalid');
        return true
    }
    else {
        pin.classList.add('is-invalid');
        e.preventDefault()
        return
    }
 });


//  TODO: try to add this to the previous keypress, one keypress event needed
 pin.addEventListener('keypress', (e) => {
     pin.type="password"
 })


//  Function to validate Date
function validateDate(e) {
    const re = /([0-9]{4})[/](0[1-9]|1[0-2])[/]([0-2]{1}[0-9]{1}|3[0-1])/;

    if (re.test(date.value)){
        date.classList.remove('is-invalid');
        console.log('good to go')
        return true
        // alert( 'follow the format');
    }
    else{
        date.classList.add('is-invalid');
        console.log('follow the format')
        e.preventDefault();
    }
}


// function to validate password
function validatePassword() {
    if(inp.value.length < 8){
        inp.classList.add('is-invalid');
        console.log('less than 8')
    }
    else{
        inp.classList.remove('is-invalid');    }
}

function myFunction() {
    if (inp.type === "password") {
        inp.type = "text";
            }
    else {
        inp.type = "password";
        }
}

// he said comment anything just to change the file
// Seriously?

// Form Blur Event listener
name.addEventListener('blur', validateName);
inp.addEventListener('blur', validatePassword);
date.addEventListener('blur', validateDate);
pin.addEventListener('blur', validatePin);
