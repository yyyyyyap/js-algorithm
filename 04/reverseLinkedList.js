let generate = require('./generatelinkedList')
let generateList = generate.generateList

function traverse(node) {
  let res = []
  while (node) {
    res.push(node.val)
    node = node.next
  }
  return res
}

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

console.log('原始链表：', traverse(generateList([1, 2, 3, 4, 5])))
console.log('循环反转的链表：',traverse(reverse1(generateList([1, 2, 3, 4, 5]))))
console.log('递归反转的链表：',traverse(reverse2(generateList([1, 2, 3, 4, 5]))))