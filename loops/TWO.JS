const coding = ["js","ruby","java","python","cpp","c"]
coding.forEach( function (item) {
    console.log(item);
    
});

function printme(item){
    console.log(item);
}
coding.forEach(printme)