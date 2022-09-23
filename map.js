const a=[2,1,3,4,5,8];
// when we transform a array we use map . for example ;[4,2,6,8,10,16] is double of array a
function double(a){
    
    return 2*a;
}
function triple(a){
    
    return 3*a;
}
const output=a.map(triple);
console.log(output)