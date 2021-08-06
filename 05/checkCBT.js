let trees = require('./testTree')
let commonTree = trees.commonTree
let completeTree = trees.completeTree

// 判断是不是完全二叉树
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
    if (treeNode.left && !treeNode.right) allLeaf = true
  }
  return true
}

console.log(checkCBT(commonTree))
console.log(checkCBT(completeTree))