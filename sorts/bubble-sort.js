let visual = true; // toggle if you want to only see numbers
let numOfRandomDigits = 40; 
let start = new Date();
 
function bubbleSort(sourceArr) { 
     let tmp1;
     let y = 0;
     
     console.log(`Source Array: ${sourceArr.join(',')}`);  

     for(let i = (sourceArr.length - 1); i >= 0; i--) { 
         // Record array pass
         y++;

         for(let x = 1; x <= i; x++) {  

            if(!visual) {
                console.log(`[Pass ${y} => IDX: ${x}] Before: ${sourceArr.join(',')}`);  
                console.log(`[Pass ${y} => IDX: ${x}] Comparing ${sourceArr[x-1]} with ${sourceArr[x]}`);  
            }
             
            if(sourceArr[x-1] > sourceArr[x]) {
                 tmp1 = sourceArr[x-1];
                 sourceArr[x-1] = sourceArr[x];
                 sourceArr[x] = tmp1;
            }

            console.log(!visual ? `[Pass ${y} => IDX: ${x}] After: ${sourceArr.join(',')}` : sourceArr.join(','));  
        }
    }

    console.log('-------------------------------------------------------------'); 
    console.log(`Sorted: ${sourceArr.join(',')}`);  
}

 
bubbleSort(Array(numOfRandomDigits).fill().map(() => Math.round(Math.random() * numOfRandomDigits)));
console.log(`--------------------------`);  
console.info('Execution time: %dms', new Date() - start)