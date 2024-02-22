const User = {
    _email: 'vikas@gmail.com',
    _password:"vikas",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)

console.log(tea.email);