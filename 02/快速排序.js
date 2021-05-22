/*  
问题一
给定一个数组arr， 和一个数num， 请把小于等于num的数放在数 组的左边， 大于num的数放在数组的右边。 
要求额外空间复杂度O(1)， 时间复杂度O(N) 
*/

/*
问题二(荷兰国旗问题)
给定一个数组arr， 和一个数num， 请把小于num的数放在数组的 左边，等于num的数放在数组的中间，大于num的数放在数组的右边。 
要求额外空间复杂度O(1)， 时间复杂度O(N)
*/

let n = 10
let numArray = new Array();
for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * n);
    numArray.push(num);
}


function partition1(arr, l, r) {
    let smaller = l - 1;
    for (let i = l; i < r; i++) {
        if (arr[i] <= arr[r]) {
            [arr[i], arr[smaller + 1]] = [arr[smaller + 1], arr[i]];
            smaller++;
        }
    }
    [arr[smaller + 1], arr[r]] = [arr[r], arr[smaller + 1]];
    return smaller + 1;
}

function partition2(arr, l, r) {
    let smaller = l - 1;
    let bigger = r;
    let i = l;
    while (i < bigger) {
        if (arr[i] < arr[r]) {
            smaller++;
            [arr[i], arr[smaller]] = [arr[smaller], arr[i]];
            i++
        } else if (arr[i] > arr[r]) {
            bigger--;
            [arr[i], arr[bigger]] = [arr[bigger], arr[i]];
        } else {
            i++;
        }
    }
    [arr[bigger], arr[r]] = [arr[r], arr[bigger]];
    return [smaller, bigger + 1];
}

function quickSort1(arr, l, r) {
    if (l < r) {
        let p = partition1(arr, l, r);
        quickSort1(arr, l, p - 1);
        quickSort1(arr, p + 1, r);
    }
}

function quickSort2(arr, l, r) {
    if (l < r) {
        let p = partition2(arr, l, r);
        quickSort2(arr, l, p[0]);
        quickSort2(arr, p[1], r);
    }
}

function quickSort3(arr, l, r) {
    if (l < r) {
        let randomInx = l + parseInt(Math.random() * (r - l + 1));
        [arr[randomInx], arr[r]] = [arr[r], arr[randomInx]];
        let p = partition2(arr, l, r);
        quickSort3(arr, l, p[0]);
        quickSort3(arr, p[1], r);
    }
}



console.log("原数组:", numArray);
// quickSort1(numArray, 0, numArray.length - 1);
quickSort3(numArray, 0, numArray.length - 1);
console.log(numArray);