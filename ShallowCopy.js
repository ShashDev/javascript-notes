                              //shallow copy

// let obj={
//     name: "shashwat"
// }
// let user=obj;
// user.name="rohan";
// console.log(obj)
// console.log(user);


let obj={
    name: "shashwat"
}
// let user=Object.assign({},obj);
let user ={...obj}
user.name="rohan";
console.log(obj)
console.log(user);

// when we copy a object in other object it follows call by refence
