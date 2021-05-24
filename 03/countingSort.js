let n = 10
let numArray = new Array();
for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * n);
    numArray.push(num);
}
console.log("original array: ", numArray);

function countingSort(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let countArr = new Array(max - min);
    for(let i = 0; i < arr.length; i++){
        countArr[arr[i] - min] = countArr[arr[i] - min] ? countArr[arr[i] - min] + 1 : 1;
    }
    let res = [];
    for(let i = 0; i < countArr.length; i++){
        while(countArr[i]){
            res.push(i + min);
            countArr[i]--;
        }
    }
    return res;
}

console.log("sorted array: ", countingSort(numArray))