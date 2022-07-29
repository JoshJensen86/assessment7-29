const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}
//the difference between the two, is the .push and .unshift.. 
//.push I believe puts the number at the end of the array. .unshift? adds one or more elements to the beginning of an array
//with.unshift the function would have a longer runtime or more work to do.. So doublerInsert would be a longer runtime

//results for the extraLargeArray
//insert 907.2007 ms
//append 3.1873 ms

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

//How long does it take to double every number in a given array?
//I beleive we need to write a similar function call as (extraLargeArray) but need to use.. (largeArray), (mediumArray)

//test for largeArrayInsert
perf.start()
doublerAppend(largeArray);
let resultsInsert2 = perf.stop();

//test for largeArrayAppend
perf.start()
doublerInsert(largeArray);
let resultsAppend2 = perf.stop();

//test for mediumArrayInsert
perf.start()
doublerAppend(mediumArray);
let resultsInsert3 = perf.stop();

//test for mediumArrayAppend
perf.start()
doublerInsert(mediumArray);
let resultsAppend3 = perf.stop();

//test for the smallArrayInsert
perf.start()
doublerAppend(smallArray);
let resultsInsert4 = perf.stop();


//test for the smallArrayAppend
perf.start()
doublerInsert(smallArray);
let resultsAppend4 = perf.stop();

//test for the tinyArrayInsert
perf.start()
doublerInsert(tinyArray);
let resultsInsert5 = perf.stop();

//test for the tinyArrayAppend
perf.start()
doublerAppend(tinyArray);
let resultsAppend5 = perf.stop();

//console.logs for extraLargeArray
console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//console.logs for largeArray
console.log('Results for the largeArray');
console.log("insert", resultsInsert2.preciseWords);
console.log("append", resultsAppend2.preciseWords);

//console.log for mediumArray
console.log('Results for the mediumArray');
console.log('insert', resultsInsert3.preciseWords);
console.log('append', resultsAppend3.preciseWords);

//console.log for smallArray
console.log('Results for the smallArray');
console.log('insert', resultsInsert4.preciseWords);
console.log('append', resultsAppend4.preciseWords);

//console.log for tinyArray
console.log('Results for the tinyArray');
console.log('insert', resultsInsert5.preciseWords);
console.log('append', resultsAppend5.preciseWords);
