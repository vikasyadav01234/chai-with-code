const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Vikas Yadav")
    },1000)
})

promiseone.then(function(){
    console.log("Promise Resolve")
})