const a=[4,3,1,2,6,8];
// filter is used for filteration for example we filter the array and take out the elements which is odd


// filter odd 
function odd(x) {
    return x%2===1;
}

const output= a.filter(odd)
console.log(output);
    
