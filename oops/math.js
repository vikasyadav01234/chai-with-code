const descripter =Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

const chai ={
    name: 'Spacial Chai',
    price: 200,
    isAvailable: true,
    orderChai: function(){
        console.log("Chai nhi bni")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai,'name',{
    //writable:false,

    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai , "name"))

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}