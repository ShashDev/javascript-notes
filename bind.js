
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
let printmyname=name.printfullname.bind(name2,"indore");
printmyname();


/*bind provide a copy of the call method */;