const array = [1, 4, 5, 8, 5, 1, 2, -5, 9];
/*
let countLinear = 0;

function linearSearch(array, item) {
    for(let i = 0; i < array.length; i++) {
        countLinear += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, -5))
console.log('Linear count = ', countLinear)

let countBinary = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1
    while (found === false && start <= end) {
        countBinary += 1;
        middle = Math.floor((start + end)/2);
        if(array[middle] ==item) {
            found = true;
            position = middle;
            return position;
        }
        if(item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position
}

console.log(binarySearch(array, -5))
console.log('Binary count = ', countBinary)
*/
let countRecursive = 0;

function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    countRecursive += 1;
    if(item === array[middle]) {
        return middle;
    }
    if(item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle-1)
    } else {
        return recursiveBinarySearch(array, item, middle+1, end)
    }
}

console.log(recursiveBinarySearch(array, 8, 0, array.length))
console.log('Recursive binary count = ', countRecursive)