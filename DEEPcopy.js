
let obj={
    name: "shashwat",
    Address:{
        city:"indore",
        state:"mp"
    }
}
// let user=Object.assign({},obj);
// user.Address.city="ujjain";
// console.log(obj)
// console.log(user);

// in this case the city of both the obj become same so to fix this we use deep copy
// lodash library for display function also

let user =JSON.parse(JSON.stringify(obj))
user.Address.city="ujjain"
console.log(obj)
console.log(user);