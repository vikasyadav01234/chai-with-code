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