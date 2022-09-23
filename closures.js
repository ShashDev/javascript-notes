function a() {
    let b=10;
    
    
    function c() {
        console.log(b);
    }
    b=100;
    c();
}
a();


// child function  can access the variable present in the lexical scope of the parent function