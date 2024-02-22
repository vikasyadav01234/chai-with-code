const User = {
    _email: 'vikas@gmail.com',
    _password:"vikas",

    get email(){
        return this._email.toUpperCase()
    },
    get password(){
        this._password = value
    }
}

