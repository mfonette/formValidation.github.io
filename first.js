const name = document.getElementById('name')
const date = document.getElementById('date');
var pin = document.getElementById('pin');
var pwd = document.getElementById('myInput');


// TODO: Remove error message once field is valid
// done that


// function to validate name
validateName = () => {
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
validatePin = () => {
    // console.log(e);
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


//  function to validate each key entering the input field
pin.addEventListener('keypress', (e) => {
    pin.type="password"
    let char = e.key
    console.log(`${char}`)
    let pinIsValid =  validatePin()
    let charRegex = /[0-9]|Backspace/;
    let charIsValid = charRegex.test(char)
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
//  why are you stressing my life

// FUNCTION TO VALIDATE DATE FORMAT
validateDate = () => {
    let dateCharRegex = /(1[6-9][0-9]{2}|2[0-9]{3})[/](0[1-9]|1[0-2])[/]([0-2]{1}[0-9]{1}|3[0-1])/;
    // let dateCharRegex = /([2-9]{1}[0-9]{3})[/](0[1-9]|1[0-2])[/]([0-2]{1}[0-9]{1}|3[0-1])/;
    let dateCharRegexIsValid = dateCharRegex.test(date.value)
    console.log(`${dateCharRegexIsValid}`)

    if (!dateCharRegexIsValid){
        date.classList.add('is-invalid');
        console.log('follow the format')
        return 
    }
}

// FUNCTION TO VALIDATE EACH KEY ENTERED ON THE DATE INPUT
date.addEventListener('keypress', (e) => {
    let dateChar = e.key
    console.log(`${dateChar}`)
    let eDateCharRegex = /[0-9]|[/]|Backspace/
    let dateCharIsValid = eDateCharRegex.test(dateChar)
    console.log(`${dateCharIsValid}`)

    if (!dateCharIsValid) {
        e.preventDefault();
        console.log('good to go')
        return 
    }
})


// function to validate password
validatePassword = () => {
    if(pwd.value.length < 8){
        pwd.classList.add('is-invalid');
        console.log('less than 8')
    }
    else{
        pwd.classList.remove('is-invalid');   
     }
}

// function onFocus for password
valPassword = () => {
    // if(pwd.classList.contains('is-invalid')) {
        pwd.classList.remove('is-invalid')
    // }
}

// function onFocus for date
valdate = () => {
    if(date.classList.contains('is-invalid')) {
        date.classList.remove('is-invalid')
    }
}

// function onFocus for name
valname= () => {
    if(name.classList.contains('is-invalid')) {
        name.classList.remove('is-invalid')
    }
}

// function onFocus for pin
valpin = () => {
    if(pin.classList.contains('is-invalid')) {
        pin.classList.remove('is-invalid')
    }
}

myFunction = () => {
    if (pwd.type === "password") {
        pwd.type = "text";
            }
    else {
        pwd.type = "password";
        }
}

// he said comment anything just to change the file
// Seriously?
// lmao...oh yes

// Form Blur Event listener
name.addEventListener('blur', validateName);
pwd.addEventListener('blur', validatePassword);
date.addEventListener('blur', validateDate);
pin.addEventListener('blur', validatePin);
