a=[1,2,0,12,5,52,9];
k=80
function linear(){
    for (var i = 0; i < a.length; i++) {
        if(a[i]==k){

            return 1;
            
        }
        
        
    }
}
if(linear()==1){
    console.log("Yes")
}
else{
    console.log("no");
}