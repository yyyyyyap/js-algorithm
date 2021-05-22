let n = 10
let numArray = new Array();
for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * n);
    numArray.push(num);
}

function heapInsert(arr, index) {
    let parent = Math.floor((index - 1) / 2);
    while (arr[index] > arr[parent]) {
        [arr[parent], arr[index]] = [arr[index], arr[parent]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
    }
}

function heapify(arr, index, heapSize) {
    let leftChild = 2 * index + 1;
    while (leftChild < heapSize) {
        let biggerChild = leftChild + 1 < heapSize && arr[leftChild + 1] > arr[leftChild] ? leftChild + 1 : leftChild;
        let largest = arr[biggerChild] > arr[index] ? biggerChild : index;
        if(largest === index) break;
        [arr[largest], arr[index]] = [arr[index], arr[largest]];
        index = largest;
        leftChild = index * 2 + 1;
    }
}

function buildHeap(arr) {
    // 第一种建堆方法：
    // for(let i = 0; i < arr.length; i++){
    //     heapInsert(arr, i);
    // }

    // 第二种建堆方法：
    for(let i = arr.length - 1; i>=0; i--){
        heapify(arr, i, arr.length);
    }
}

function heapSort(arr) {
    if(!arr || arr.length < 2) return;
    buildHeap(arr);
    let heapSize = arr.length;
    [arr[0], arr[heapSize - 1]] = [arr[heapSize -1], arr[0]];
    heapSize--;
    while(heapSize > 0){
        heapify(arr, 0, heapSize);
        [arr[0], arr[heapSize - 1]] = [arr[heapSize - 1], arr[0]];
        heapSize--;
    }
}

console.log("原数组:", numArray);
heapSort(numArray);
console.log(numArray);
