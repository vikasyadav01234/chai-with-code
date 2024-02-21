let myheros=["thor","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.Vikas = function(){
    console.log(`Vikas is present in all objects`);
}
heropower.Vikas();
myheros.Vikas();

//code


let username ="Vikas Yadav   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
}

username.trueLength();
"hitesh".trueLength();