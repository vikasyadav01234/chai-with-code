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