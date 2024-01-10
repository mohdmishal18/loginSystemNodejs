

const justin= new Promise((resolve,reject)=>{
    let age=11;
    if(age>10){
        setTimeout(()=>{
            resolve(10);     
         },5000)
     
    }
    else{
        reject("sorry for kjldjgflkfjg")
    }


}) 

justin.then((sahal)=>{
console.log(sahal)

return new Promise((resolve, reject) => { // (*)
setTimeout(() => resolve(sahal * 2), 5000);
});

}).then((s)=>{
console.log(s)
})


.catch((err)=>{
console.log(err)
}).finally(()=>{
console.log("dsdsd")
})
