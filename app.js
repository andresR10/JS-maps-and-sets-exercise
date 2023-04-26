// What does this code return ?
new Set([1,1,2,2,3,4]); // Set {1,2,3,4}

// What does the following code return ?
[...new Set('referee')].join("") // 'r,e,f'

// What does the Map m look like after running the following code ?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(4) => false}


// hasDuplicate
// write a function called hasDuplicate which accepts an array and returns true or false if that array conatins a duplicate 

function hasDuplicate(arr){
    return new Set(arr).size !== arr.length;
}


// vowelCount 
// write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = str => 
const vowels = 'aeiou';
const vowelMap = new Map();
for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
        if(vowelMap.has(char)){
            vowelMap.set(char, map.get(char) + 1)
        } else {
            vowelMap.set(char, 1);
        }
    }
    return vowelMap;
}