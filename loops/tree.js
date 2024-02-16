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
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")

console.log(map);
for (const [key, value] of map) {
    console.log(key,':-',value);
    
}
const myobject = {
    'js':"javascript",
    'py':"python",
    'cpp':"c++",
}
for (const key in myobject) {
    console.log(`${key} shorcut is for ${myobject[key]}`);
}