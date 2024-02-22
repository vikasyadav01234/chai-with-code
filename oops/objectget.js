const User = {
    email: 'vikas@gmail.com',
    password:"vikas",

    get email(){
        return this._email.toUpperCase()
    },
    get password(){
        this._password = value
    }
}

