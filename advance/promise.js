const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Vikas Yadav")
        resolve()
    },1000)

})

promiseone.then(function(){
    console.log("Promise Resolve")
})