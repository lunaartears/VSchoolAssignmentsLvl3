const numbers = [2, 4, 7, 11, 15];
const target = 9;

function findSumOfTwo(numsArr, targetNum) {
    let newArr = []
    for (let i = 0; i < numsArr.length; i++) {
        let num1 = numsArr[i]

        for (let j = 0; j < numsArr.length; j++) {
            let num2 = numsArr[j]

            if (num1 + num2 === targetNum) {
                newArr.push(num1)
            }

        }
    }
    return newArr
}

//console.log(findSumOfTwo(numbers, target)); // Output: [2, 7]

const numbers2 = [5, 12, 3, 9, 1];
const target2 = 8;

//console.log(findSumOfTwo(numbers2, target2)); // Output: [3, 5]



const input = 'Hello, World!';


function countVowels(string) {
    let count = 0
    let vowels = "aeiou"
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (vowels.includes(char)){
            count ++
        }
        // if (char.toLowerCase() === "a") count++
        // if (char.toLowerCase() === "e") count++
        // if (char.toLowerCase() === "i") count++
        // if (char.toLowerCase() === "o") count++
        // if (char.toLowerCase() === "u") count++
    }
    return count
}

//console.log(countVowels(input)); // Output: 3


const input2 = 'Counting Vowels';

//console.log(countVowels(input2)); // Output: 5


function solution(arr){
    if ( arr.includes(-1)) {
        let filtered = arr.filter(function(num) {
            return num !== -1
        })
        filtered.sort((a,b) => a - b)
        for (let i = 0; i < arr.length; i++){
            if (arr[i] !== -1) {
                arr[i] = filtered[0]
                filtered.splice(0,1)
            }
        }
    } else return arr.sort((a,b) => a - b)
return arr
}


console.log(solution([100, -1, 50, -1, 75])) // [50, -1, 75, -1, 100]


//talk it out // questions
// Look up .sort()
// how to leave the ones in place
// return sorted array except the ones

//pseudo code your plan
// sort the num arr
// ?

//solve
