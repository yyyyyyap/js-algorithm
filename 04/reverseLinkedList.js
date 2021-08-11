let listutil = require('./linkedListUtil')
let generateList = listutil.generateList
let listTraverse = listutil.listTraverse

// 普通循环解法
function reverse1(head) {
  let prev = null
  let cur = head
  while (cur) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}

// 递归解法
function reverse2(head) {
  if (!head.next) return head

  let newHead = reverse2(head.next)
  head.next.next = head
  head.next = null

  return newHead
}

console.log('原始链表：', listTraverse(generateList([1, 2, 3, 4, 5])))
console.log('循环反转的链表：',listTraverse(reverse1(generateList([1, 2, 3, 4, 5]))))
console.log('递归反转的链表：',listTraverse(reverse2(generateList([1, 2, 3, 4, 5]))))