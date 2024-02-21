function Setusername(username){
    this.username = username
    console.log(called);
}

function createUser(username, email, password){
    Setusername.call(this, username);
    this.email = email
    this.password = password
}

const chai = new createUser("Vikas","yadav2004@gamil.com","6767877")
console.log(chai);