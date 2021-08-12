let listUtil = require('./linkedListUtil')
let listTraverse = listUtil.listTraverse

let [node1, node2, node3] = [{}, {}, {}]
node1.val = 1, node1.next = node2, node1.rand = node3
node2.val = 2, node2.next = node3, node2.rand = node1
node3.val = 3, node3.next = null, node3.rand = node2
let head = node1

// 两种办法：
// 1：利用哈希表将新链表和随机链表的节点一一对应
// 2：
function copyRandomList(head) {
  if (!head) return null
  if (!head.next) return {
    val: head.val,
    next: head.next,
    rand: head.rand
  }

  // 新建并复制已有节点连接到已有节点后
  let pHead = head
  while (pHead) {
    let tempNode = {
      val: pHead.val
    }
    let catheNode = pHead.next
    pHead.next = tempNode
    tempNode.next = catheNode
    pHead = catheNode
  }

  // 复制随机指针关系
  pHead = head
  while (pHead) {
    pHead.next.rand = pHead.rand ? pHead.rand.next : null
    pHead = pHead.next.next
  }

  // 分离出两个链表
  pHead = head
  let newHead = head.next
  while (pHead) {
    console.log('-----------------------')
    console.log(pHead)
    let catheNode = pHead.next
    pHead.next = pHead.next.next
    catheNode.next = catheNode.next ? catheNode.next.next : null
    pHead = pHead.next 
  }

  return newHead
}

let newList = copyRandomList(head)
newList.val = 2
console.log(listTraverse(newList)); 
console.log(listTraverse(head)); 
console.log(newList.rand)
console.log(head.rand)