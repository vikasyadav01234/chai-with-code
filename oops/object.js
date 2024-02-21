function vikas(num){
    return num*5
}
vikas.power=2
console.log(vikas(5));
console.log(vikas.power);
console.log(vikas.prototype);
function createUser(username , score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printme = function(){
    console.log(`Score is ${this.score}`)
}

const tea = createUser("vikas",10000000);

