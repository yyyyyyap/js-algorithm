let listUtil = require('./linkedListUtil')
let generateList = listUtil.generateList
let listTraverse = listUtil.listTraverse

// 使用额外空间为O(n)的栈实现
function checkPaliList1(head) {
  let phead = head
  let stack = []
  if (!head || !head.next) return true
  while (phead) {
    stack.push(phead)
    phead = phead.next
  }
  phead = head
  while (phead) {
    if (phead.val !== stack.pop().val) return false
    phead = phead.next
  }
  return true
}

// 使用额外空间为O(n/2)的栈实现
function checkPaliList2(head) {
  if (!head || !head.next) return true
  let slow = head
  let fast = head
  let phead = head
  let stack = []
  // 利用快慢指针找到剩余节点数为一半的节点
  while (fast) {
    if (fast.next) {
      fast = fast.next.next
    } else {
      fast = fast.next
    }
    slow = slow.next
  }
  while (slow) {
    stack.push(slow)
    slow = slow.next
  }
  while (stack.length) {
    if (phead.val !== stack.pop().val) return false
    phead = phead.next
  }
  return true
}

// 使用额外空间O(1)实现
function checkPaliList3(head) {
  let slow = head
  let fast = head
  let phead = head
  let res = true
  while (fast) {
    if (fast.next) {
      fast = fast.next.next
    } else {
      fast = fast.next
    }
    slow = slow.next
  }
  let prev = null
  while (slow) {
    let temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
  }
  let newHead = prev
  while (prev) {
    if (phead.val !== prev.val) res = false
    prev = prev.next
    phead = phead.next
  }
  prev = null
  while (newHead) {
    let temp = newHead.next
    newHead.next = prev
    prev = newHead
    newHead = temp
  }
  return res
}


let testArr1 = [1, 2, 30, 2, 1]
console.log('testArr1: ', testArr1)
let generateList1 = generateList(testArr1)
console.log('1:', checkPaliList1(generateList1))
console.log('2:', checkPaliList2(generateList1))
console.log('3:', checkPaliList3(generateList1))

let testArr2 = [1, 2, 30, 2, 2, 1]
console.log('testArr1: ', testArr2)
let generateList2 = generateList(testArr2)
console.log('1:', checkPaliList1(generateList2))
console.log('2:', checkPaliList2(generateList2))
console.log('3:', checkPaliList3(generateList2))