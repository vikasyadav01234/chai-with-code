const arr =  [1,2,3,4,5,6,7,8]

for (const i of arr) {
    console.log(i);
    
}
const greetings = "Vikas Yadav"
for (const i of greetings) {
    if(i==" "){
        continue;
    }
    console.log(`Each char is ${i}`)
    
}