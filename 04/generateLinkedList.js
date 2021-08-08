// 输入数组，生成链表
function generateList(arr) {
  if(!arr) return
  let head = {}
  head.val = arr[0]
  phead = head
  for(let i = 1; i < arr.length; i++) {
    let tempObj = {}
    tempObj.val = arr[i]
    phead.next = tempObj
    phead = phead.next
  }
  return head
}

// console.log(generate([1, 2, 3, 4, 5]))

module.exports = {
  generateList: generateList
}