//To sort array in asc order using bubble sort algorithm

//Input
const arrayToSort=[]
//code
function bubbleSort(arrayToSort){
    let result=[...arrayToSort]
    let swap=true
    const length=arrayToSort.length;

    while(swap===true){
        let iterations=0
        for (let i=0; i<length-1; i++){
            if(result[i]>result[i+1]){
                iterations++
                let temp=  result[i]
                result[i]=result[i+1];
                result[i+1]=temp           
            }
        }
        if(iterations===0){
            swap=false
        }
    }

return result
}
const result= bubbleSort(arrayToSort)
console.log(result)

//Output
// [1, 2, 4, 6, 7, 8]