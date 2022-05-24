const array = [1, 4, 5, 8, 5, 100, 54,-64, 1, 2, -5, 9,1 ,5, 7, 98, -5, -2, 0 , 6, 1, 4, 5, 8, 5, 100, 54,-64, 1, 2, -5, 9,1 ,5, 7, 98, -5, -2, 0 , 6]

let countSelection = 0

function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let indexMin = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j;
            }
            countSelection += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array
}

console.log(selectionSort(array))
console.log(array.length)
console.log('Selection sort count = ', countSelection)

let countBuble = 0;

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
            countBuble += 1;
        }      
    }
    return array
}

console.log(bubbleSort(array))
console.log(array.length)
console.log('Bubble sort count = ', countBuble)

let countQuick = 0;

function quickSort(array) {
    if(array.length <= 1) {
        return array
    }

    let pivotIndex = Math.floor(array.length/2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        countQuick += 1;
        if(i === pivotIndex) {
            continue
        }
        if(array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
        
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log(array.length)
console.log('Quick sort (Hoara) count = ', countQuick)