for (let j = 0; j < 10; j++) {
    const element = j;
    if(j==5){
        console.log("5 is best");
    }
    console.log(element);
    
}
let i=0;
while(i<10){
    console.log(`Value of  i is ${i}`);
    i++;
}
do{
    console.log(`score is ${i}`);
    i++;
    if (i==1000){
        console.log("You are the winner");
    }
}while(i<=1000);