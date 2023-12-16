function callback(test){
    test()
}

callback(function(){
    console.log("this is a callback function")
})