let trees = require('./testTree')

let commonTree = trees.commonTree
let completeTree = trees.completeTree

// 平衡二叉树：每个子树 的左子树和右子树的高度都不能超过1


function checkBalanceTree(root) {
  if (!root) {
    return {
      isBalanceTree: true,
      level: 0
    }
  }

  let leftData = checkBalanceTree(root.left)
  let rightData = checkBalanceTree(root.right)

  let isBalanceTree =  leftData.isBalanceTree && rightData.isBalanceTree 
  && Math.abs(leftData.level - rightData.level) < 2
  let level =  Math.max(leftData.level, rightData.level) + 1
  
  return {
    isBalanceTree: isBalanceTree,
    level: level
  } 
}

console.log(checkBalanceTree(commonTree).isBalanceTree)
console.log(checkBalanceTree(completeTree).isBalanceTree)