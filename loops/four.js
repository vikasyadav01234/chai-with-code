const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newnums = myNums.filter( (num) => num >4)
//console.log(newnums);
const newnums = myNums.map((num)=> num+1).map((num)=>num*10).filter((num)=>num>=40)
console.log(newnums)