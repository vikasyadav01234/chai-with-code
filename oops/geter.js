class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return `${this._email}`
    }
    set email(){
        this._email = value
    }
    get password(){
        return `${this._password.toUpperCase()}vikas`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new User ("hitesh.ai","vikas")
console.log(hitesh.password);