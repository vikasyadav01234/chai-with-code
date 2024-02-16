const myNums = [1,2,3,4,5]
const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc:${acc} and currval : ${currval}`);
    return acc+currval
},0)
console.log(myTotal);

const mycart =[
    {
        name:"js course",
        price: 1000
    },
    {
        name:"py course",
        price:1999
    },
    {
        name:"rb course",
        price:1021
    },
    {
        name:"is course",
        price:1022
    },
    {
        name:"english course",
        price:1004
    },
    {
        name:"hindi course",
        price:10003
    },
]
const pricetopay=mycart.reduce((acc, item) =>acc + item.price,0)
console.log(pricetopay);