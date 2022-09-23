async function a(){

    let y=new Promise((resolve,reject)=>{
        
    setTimeout(() => {
        
        resolve("a")
    }, 1000);
    })
    let a=await y;
    console.log("c");
    console.log(a);
    console.log("b")
}
a();