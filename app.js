function User(email, password, firstName, lastName, age, address, phone, payment,color){

    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputAddress = $("#txtAddress");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");

function isValid(user) {
    let valid = true;

    if (user.email="" && user.password==""){
        valid=false;
    }

    return valid;
}

function register(){
    let user = new User(inputEmail.val(),inputPassword.val(),
    inputFirstName.val(),inputLastName.val(),inputAge.val(),
    inputAddress.val(),inputPhone.val(),inputPayment.val(),inputColor.val());
   
    if (isValid(user)==true){
    saveUser(user);
    }else{
        alert("Please enter a valid user name");
    }
}
