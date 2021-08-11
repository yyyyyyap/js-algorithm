let listUtil = require('./linkedListUtil')
let generateList = listUtil.generateList
let listTraverse = listUtil.listTraverse

/**
 * @description  使用O(1)额外空间解决链表的partition问题 
 * @param  {Object} head
 * @param  {Number} num
 * @return {Object} head
 */
function partitionList2(head, num) {
  if(!head || !head.next) return head

  let pHead = head
  // 使用六个对象记录小于num的开头、结束，等于num的开头、结束，大于num的开头、结束
  let [sHead, sEnd, eHead, eEnd, bHead, bEnd] = [null, null, null, null, null, null]

  while (pHead) {
    // 断开节点之间的连接，否则有可能会有环出现
    let next = pHead.next
    pHead.next = null
    if (pHead.val < num) {
      if (!sHead) {
        sHead = pHead
        sEnd = pHead
      } else {
        sEnd.next = pHead
        sEnd = pHead
      }
    }
    if (pHead.val === num) {
      if (!eHead) {
        eHead = pHead
        eEnd = pHead
      } else {
        eEnd.next = pHead
        eEnd = pHead
      }
    }
    if (pHead.val > num) {
      if (!bHead) {
        bHead = pHead
        bEnd = pHead
      } else {
        bEnd.next = pHead
        bEnd = pHead
      }
    }
    console.log(pHead.val)
    pHead = next
  }

  if (sEnd) {
    sEnd.next = eHead
    eEnd = eEnd ? eEnd : sEnd
  }
  if (eEnd) {
    eEnd.next = bHead
  }
  return sHead ? sHead : eHead ? eHead : bHead
}


let testArr1 = [5, 2, 6, 2, 3, 1, 9, 1]
console.log('testArr1: ', testArr1)
let testList1 = generateList(testArr1)
console.log(testList1)
console.log('res:', listTraverse(partitionList2(testList1, 2)))