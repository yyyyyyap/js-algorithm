let trees = require('./testTree')
let commonTree = trees.commonTree
let completeTree = trees.completeTree

// 判断是不是完全二叉树
// 思路: 需要满足两个条件：
// 1.每个树节点不能只有右孩子没有左孩子
// 2.当遇到第一个只有左孩子没有右孩子的节点时，剩下的所有节点都是叶子节点
function checkCBT(root) {
  if (!root) {
    return true;
  }
  let allLeaf = false
  let queue = []
  queue.push(root)
  while (queue.length) {
    let treeNode = queue.shift()
    if (treeNode.right && !treeNode.left || allLeaf && (treeNode.left || treeNode.right)) {
      return false
    }
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
    if (!treeNode.left || !treeNode.right) allLeaf = true
  }
  return true
}

console.log(checkCBT(commonTree))
console.log(checkCBT(completeTree))