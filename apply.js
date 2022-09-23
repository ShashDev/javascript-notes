// array=[1,2,3,4,5,5,6]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
    
// }

let name={
    firstname:'shashwat',
    lastname:'bhadoriya',
    printfullname : function(howntown){
        console.log(this.firstname+ " "+this.lastname+ "  from "+howntown);
    }
}
name.printfullname.apply(name,["indore"]);

let name2={
    firstname:'swapnil',
    lastname:'bhadoriya',
    
}
name.printfullname.call(name2,"indore");/* borrow the function of other object;*/ 