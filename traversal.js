// const a=[3,4,6,5,3,2,6,7,8,9];
// for (let index = 0; index < a.length; index++) {
//     console.log(a[index])
    
// }


//searching in array
// const a=[3,4,6,5,3,2,6,7,8,9];

// for (let index = 0; index < a.length; index++) {
   
//     if (a[index]===b) {
//         console.log(index);
        
//     }
//     var b=2;
// }


//array sort

const a=[3,4,6,5,3,2,6,7,8,9];

let temp ;
for (let b = 0; b < a.length; b++) {
    for (let c = b+1; c < a.length; c++) {
        
        
    if (a[b]>a[c]) {
        temp= a[b]
         a[b]=a[c];
         a[c]=temp
         
     }
   
    }
    
    
}
console.log(a);


