let numOfRandomDigits = 40;
let functionCallNum = 0;
let start = new Date();
 
function someSort(sourceArr) {
    let msgPrefix;
    let tmp1; 
    let isSorted = true; 
    // ------------------------
    if(functionCallNum > 0) { 
        console.info('-----------------------------------------------------');
        console.log(`[${functionCallNum}] Function recursively called`); 
        console.info('-----------------------------------------------------');
    } 
    // ------------------------
    sourceArr.forEach((items, index) => { 
        msgPrefix = `F#:${functionCallNum} => IDX:${index}`;
        // If we are at the end of the line, let's check the state 
        if((sourceArr.length - 1) == index) {   
            if(isSorted) {
                console.log(`\n\n--------------------------`);  
                console.log(`--- Sorted! ---`);  
                console.log(`--------------------------`);  
                console.log(` ${sourceArr.join(',')} `);  
                return;
            }else {  
                functionCallNum = functionCallNum + 1;
                console.log(`[${msgPrefix}] On iteration ${index} of ${sourceArr.length}, recursively calling`);
                console.log(`[${msgPrefix}] State: ${sourceArr.join(',')}`);  
                return bubbleSort(sourceArr);
            } 
        }
        // Output the state
        console.log(`[${msgPrefix}] Comparing ${sourceArr[index]} to ${sourceArr[index+1]}`);  
        console.log(`[${msgPrefix}] Before: ${sourceArr.join(',')}`); 
        // Do the do
        if(sourceArr[index] > sourceArr[index+1]) {  
            tmp1 = sourceArr[index+1];
            sourceArr[index+1] = sourceArr[index];
            sourceArr[index] = tmp1; 
            // Mark whether we sorted
            isSorted = false;
        }  
        
        // Loop de loop
        console.log(`[${msgPrefix}] After: ${sourceArr.join(',')}`);  
    }); 
}


console.info(`==================================================================`);
console.info(`  Starting Some Sort`); 
console.info(`==================================================================`);
someSort(Array(numOfRandomDigits).fill().map(() => Math.round(Math.random() * numOfRandomDigits)));
console.log(`--------------------------`);  
console.info('Execution time: %dms', new Date() - start)