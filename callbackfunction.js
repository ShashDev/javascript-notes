var cal=function(fx,a,b){
    return fx(a,b);

}

var sum= function(a,b){
    return a+b;
}
console.log(cal(sum,3,4))
/*function without a name is anonymous function*/
//callback function are the function which takes argument as a function for calling it latetr according 
//to the requirement of the program