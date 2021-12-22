const a = new Promise((resolve , reject) => {
    setTimeout(() => {
     let a = parseInt(Math.random()*10)  
     console.log(a); 
        if(a % 2 === 0) {
            resolve('resolve');
        } else {
            reject('reject');
        }
    } , 1000)
});

a.then((ha) => {
    console.log(ha)
}).catch((r) => {
    console.log(r)
})