const { log } = console;
// Program to count occurance of chars in array
const arr = ['a', 'a', 'b', 'c', 'b', 'd'];
const result = {};
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!result[element]) {
        result[element] = 1;
    } else {
        result[element] = result[element] + 1;
    }
}
console.log(result);

// Program to find the duplicates !=
// Program to remove duplicates ===
const arr = [1, 1, 2, 4, 5, 5, 6, 7, 8, 8, 9, 10];
const res = arr.filter((e, index) => arr.indexOf(e) === index);
console.log(res);

// Program to check palendrome or not - APPROCH 1
const str = 'absba';
isPalendrome = str.split('').reverse().join('') === str ? true : false;
console.log(isPalendrome);

// Program to check palendrome or not - APPROCH 2
const str = 'abba';
let counter = 0;
let isPalendrone = true;
for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != str[counter]) {
        isPalendrone = false;
        break;
    }
    counter++;
}
console.log(isPalendrone);

// Program to remove a specific char from string
const str = 'The quick brown fox jumps over the lazy dog';
const charToRemove = 'x';
const result = str.split('').filter(e => e != charToRemove).join('');
console.log(result);

// Program to print all permutations of an array
const str = '';
const arr = str.length > 0 ? str.split('') : [];

function reverse() {
    const temp = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[i] = temp;
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    reverse();
}

// Program to check if two strings are anagrams or not
const str1 = 'PEAR';
const str2 = 'RAXE';
const arr1 = str1.split('');
const arr2 = str2.split('');
const isAnagram = arr1.sort().join('') === arr2.sort().join('') ? true : false;
console.log(isAnagram);

// Program to find missing number in array from 1-100
const arr = [];
const N = 100;
for (let i = 0; i < N; i++) {
    arr[i] = i + 1;
}
arr[47] = 0;
console.log(arr);
const sum = N * (N + 1) / 2;
const actualSum = arr.reduce((sum, curr) => sum += curr);
const missingNum = sum - actualSum;
console.log(missingNum);

// Program to find duplicates in an array
const arr = [1, 1, 2, 4, 4, 5, 6, 3, 4, 4, 5, 6, 7, 8, 9, 9, 10];
const res = arr.filter((e, index) => arr.indexOf(e) != index);
console.log(res);

// Program to find which number of 1st array is not present in 2nd array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 1, 0, 5];
const res = arr1.filter(e => arr2.indexOf(e) === -1);
console.log(res);

// Program to find the 2nd largest
const arr = [1, 2, 99, 990];
if (arr.length === 0) {
    console.log('No 2nd highest is present');
}
else if (arr.length === 2) {
    console.log(arr[0] > arr[1] ? arr[1] : arr[0]);
} else if (arr.length === 1) {
    console.log(arr[0]);
} else {
    const res = arr.sort().filter((e, index) => arr.indexOf(e) === index);
    console.log(res[res.length - 2]);
}
// Program to check if number is binary or not
const num = 100160;
const numArr = num.toString().split('');
let isBinary = true;
for (let i = 0; i < numArr.length; i++) {
    const element = numArr[i];
    if (element != '0' && element != '1')
        isBinary = false;
}
console.log(isBinary);

// Program to rotate a matrix by 90 degree clockwise
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const result = [];
for (let i = 0; i < matrix.length; i++) {
    const temp = [];
    for (let j = 0; j < matrix.length; j++) {
        const row = matrix[j];
        temp.push(row[i]);
    }
    result.push(temp.reverse().join(' '));
}
result.forEach(row => log(row + '\n'));

// Hackerrank program to count valleys
const path = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];
let valley = 0;
let counter = 0;
for (let i = 0; i < path.length; i++) {
    const prevCount = counter;
    path[i] === 'U' ? counter++ : counter--;
    if (counter === 0 && prevCount === -1) {
        valley++;
    }
}
log(valley);

// Program to print fibonacci numbers till n
let prev = -1;
let current = 1;
let n = 20;
while (n > 0) {
    let result = prev + current;
    console.log(result);
    prev = current;
    current = result;
    n--;
}

// Dassault Interview question
function fun(input) {
    const output = input.split("").sort();
    const sanitized = output.filter((e, index) => output.indexOf(e) === index);
    const occurance = [];
    for (let i = 0; i < sanitized.length; i++) {
        const a = sanitized[i];
        const count = input.split(a).length - 1;
        occurance.push({ char: a, count });
    }
    log({ sorted: output, occurance });
}

fun("INDIA");

// // Without using build in functions
function fun(input) {
    const res = input.split("").map(e => { return { char: e, code: e.charCodeAt(e) } });
    for (let i = 0; i < res.length - 1; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[j].code < res[i].code) {
                const temp = res[i];
                res[i] = res[j];
                res[j] = temp;
            }
        }
    }
    const sorted = res.map(e => e.char).join("");
    let occurance = {};
    for (let i = 0; i < sorted.length; i++) {
        let element = sorted[i];
        if (Object.keys(occurance).indexOf(element) != -1) {
            occurance[element] = occurance[element] + 1;
        } else {
            occurance[element] = 1;
        }
    }
    return ({ sorted, occurance });
}

log(fun("INDIA"));

// Find prime nums till n
const n = 100;
const numbers = [];
const primes = [2, 3, 5, 7];
for (let i = 1; i <= n; i++) {
    if (i != 1 && i % 2 != 0 && i % 5 != 0 && i % 3 != 0 && i % 7 != 0) {
        primes.push(i);
    }
}
log(primes.length);

// Program for bubble sort
function bubbleSort(arr) {
    let swap = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap++;
            }
        }
    }
    log(`Array is sorted in ${swap} swaps.`);
    log(`First Element: ${arr[0]}`);
    log(`Last Element: ${arr[arr.length - 1]}`);
}

log(bubbleSort([6, 4, 1]));

// Find duplicate elements in an array without using a library
const arr = [1, 2, 3, 2, , 2, 1, 1, 3];
const memory = [];
const duplicates = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (memory.indexOf(element) != -1) {
        duplicates.push(element);
    } else {
        memory.push(element);
    }
}
log(duplicates.filter((e, index) => duplicates.indexOf(e) === index));,
