const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Vikas Yadav")
        resolve()
    },1000)

})

promiseone.then(function(){
    console.log("Promise Resolve")
})

new Promise(function(resolve, reject){
    console.log("Jai Sree Ram")
    resolve();
},1000).then(function(){
    console.log("Jai BajrangBali")
})


const promisetwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username: "Vikas",password : "12345"})
        }else{
            reject('Error:Something Wrong')
        }
    },1000)
})


promisetwo.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})


    
fetch('https://api.github.com/users/vikasyadav01234').then((user)=>{
    return user.json()
}).then((data) =>{
    console.log(data);
})
.catch((error)=>console.log(error))