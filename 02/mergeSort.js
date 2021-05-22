function mergeSoft(arr) {
    // let [left, right] = [0, arr.length - 1];
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let l = arr.slice(0, mid);
    let r = arr.slice(mid);
    return merge(mergeSoft(l), mergeSoft(r));
}

function merge(l, r) {
    let temp = [];

    let i = 0,
        j = 0;
    while (i < l.length && j < r.length) {
        if (l[i] <= r[j]) {
            temp.push(l[i++]);
        } else {
            temp.push(r[j++]);
        }
    }

    while (i < l.length) {
        temp.push(l[i++]);
    }
    while (j < r.length) {
        temp.push(r[j++])
    }
    
    return temp;
}

let arr = [1, 4, 2, 55, 3, 8, 9, 4]

console.log(mergeSoft(arr));