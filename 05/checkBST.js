let trees = require('./testTree')
let commonTree = trees.commonTree
let searchTree = trees.searchTree

// 递归判断输入是不是搜索二叉树
function checkBST1(root) {
  let prevVal = Number.MIN_VALUE

  function isBST(root) {
    if (!root) return true;
    let isLeftBST = isBST(root.left)
    if (!isLeftBST) {
      return false
    } else {
      if( root.val < prevVal) {
        return false
      } else {
        prevVal = root.val
      }
    }
    return isBST(root.right)
  }

  return isBST(root)
}

// 非递归判断是不是搜索二叉树
function checkBST2(root) {
  let preVal = Number.MIN_VALUE
  if(!root) return
  let stack = []
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    let treeNode = stack.pop()
    if (treeNode.val < preVal) {
      return false
    } else {
      preVal = treeNode.val
    }
    cur = treeNode.right
  }
  return true
}

console.log(checkBST1(commonTree))
console.log(checkBST1(searchTree))
console.log(checkBST2(commonTree))
console.log(checkBST2(searchTree))