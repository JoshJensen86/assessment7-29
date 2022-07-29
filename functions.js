// sum zero


function matchSum(arr, k){
    for( var i=0; i < arr.length; i++ ){
      for(var j= i+1; j < arr.length; j++){
         if (arr[i] + arr[j] === k){
          return true;
        }
       }
      }
      return false;
    }

    const result01 = matchSum([])
    console.log (result01)
    const result02 = matchSum([1, 2, 3, -2]);
    console.log(result02)
// unique characters
 

// function hasUniqueChars(word) {
//     let uniqueChars = new Set([])
//     for (let i = 0; i < word.length; i++) {
//       uniqueChars.add(word[i])
//     }
//     return uniqueChars.size === word.length
//   }




//pangram sentence

// function isPangram (string){
//     let strArr = string.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
//     for(let i = 0; i < alphabet.length; i++){
//         if(strArr.indexOf(alphabet[i]) < 0){
//         return false;
//         }
//     }
//     return true;
// }
// const result = isPangram("The quick brown fox jumps over the lazy dog!");
// console.log(result)
// const result2 = isPangram("I like cats, but not mice");
// console.log(result2)



//longest word
// function getLongestWords (text) {
//     let textArr = text.replace(/[^A-Za-z0-9\s]/g, "").split(" ");
//     let textArrSort = sortByLength(textArr);
//     let letterCount = 0;
//     let largestWords = [];

//     for(let i =0; i < textArrSort.length; i++) {
//         if (textArrSort[i].length >= letterCount){
//             largestWords.push(textArrSort[i]);
//             letterCount = textArrSort[i].length;
//         }
//     }
//     return largestWords;
// }
// function sortByLength (array) {
//     return array.sort ((x,y) => y.length - x.length)
// }
// const result3 = getLongestWords('hi', 'hello','i')
// console.log(result3)

