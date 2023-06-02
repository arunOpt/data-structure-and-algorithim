//To sort array in asc order using bubble sort algorithm

//Input
const arrayToSort =[8,6,1, 7, 2,4]
//code

function bubbleSort(arrayToSort) {
    let result = [...arrayToSort]
    let swap = true
    const length = arrayToSort.length;
    let loop = 0
    let totalLoop = 0
    while (swap === true) {
        loop++
        let iterations = 0
        for (let i = 0; i < length - 1; i++) {
            totalLoop++
            if (result[i] > result[i + 1]) {
                iterations++
                let temp = result[i]
                result[i] = result[i + 1];
                result[i + 1] = temp
            }
        }
        if (iterations === 0) {
            swap = false
        }
    }
    console.log(loop, totalLoop);
    return result
}

//Output
const result = bubbleSort(arrayToSort)
console.log(result)
// [1, 2, 4, 6, 7, 8]