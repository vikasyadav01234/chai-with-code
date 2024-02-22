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
    writable:false,

    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai , "name"))