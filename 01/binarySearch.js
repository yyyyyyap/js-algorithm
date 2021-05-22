let arr1 = [];
let arr2 = [2, 3, 4, 7, 13, 53, 67, 121];
let arr3 = [2, 3, 4, 7, 13, 13, 13, 13, 13, 53, 67, 121]
let arr4 = [4, 3, 4, 7, 13, 13, 13, 13, 13, 53, 67, 121]


// 最基础的二分搜索
function binarySearch(arr, target) {
    let [left, right] = [0, arr.length - 1];
    while (left + 1 < right) {
        let mid = left + parseInt((right - left) / 2);
        if (arr[mid] === target) return mid;

        if (arr[mid] < target) left = mid;
        if (arr[mid] > target) right = mid;
    }
    if (arr[left] === target) return left;
    if (arr[right] === target) return right;
    return -1;
}

// 找大于等于某个数最左侧的位置
function biggerThanNum(arr, target) {
    let [left, right] = [0, arr.length - 1];
    while (left + 1 < right) {
        let mid = left + parseInt((right - left) / 2);
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid;
        }
    }
    if (arr[left] >= target) return left;
    if (arr[right] >= target) return right;
    return -1;
}

// 局部最小值问题（局部最小值指左右两边的值都比当前值要大）（找到其中一个即可）
function localMinimum(arr) {
    let [left, right] = [0, arr.length - 1];
    if (arr[left + 1] > arr[left]) return left;
    if (arr[right - 1] > arr[right]) return right;
    while (left + 1 < right) {
        let mid = left + parseInt((right - left) / 2);
        if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]){
            return mid;
        }else{
            if (arr[mid] >= arr[mid - 1]){
                right = mid;
            } else {
                left = mid;
            }
        }
    }
    if (arr[left] < arr[left + 1] && arr[left] < arr[left - 1]) return left;
    if (arr[right] < arr[right + 1] && arr[right] < arr[right - 1]) return right;
    return -1;
}

console.log(binarySearch(arr3, 2));
console.log(biggerThanNum(arr3, 3));
console.log(localMinimum(arr4));