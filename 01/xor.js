let arr1 = [1, 2, 3, 1, 1, 1, 2, 3, 2, 4, 5, 2, 5, 5, 4];
let arr2 = [1, 2, 3, 1, 1, 1, 2, 3, 2, 4, 5, 2, 5, 5];

// 找数组中唯一出现了奇数次的数字
function onlyOddTimesNum(arr) {
    return arr.reduce((pre, cur) => pre ^ cur, 0)
}

function twoOddTimesNum(arr) {
    let eor = arr.reduce((pre, cur) => pre ^ cur, 0);

    let rightOne = eor & (~eor + 1)

    let eor1 = arr.reduce((pre, cur) => {
        if ((rightOne & cur) === 0) {
            return pre ^ cur;
        } else {
            return pre;
        }
    }, 0)

    let eor2 = eor ^ eor1;
    return [eor1, eor2];
}

console.log(onlyOddTimesNum(arr1));
console.log(twoOddTimesNum(arr2));