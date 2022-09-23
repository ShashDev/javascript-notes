const a=[5,4,3,1,2,87]

//sum
//max//min
// reduce is used when we have to itrate whole array and find a particular element ;

const output=a.reduce(function(acc,curr){

    acc=acc+curr
    return acc;
},0)

console.log(output)