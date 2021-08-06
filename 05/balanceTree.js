let trees = require('./testTree')

let commonTree = trees.commonTree
let completeTree = trees.completeTree

function checkBalanceTree(root) {
  if (!root) {
    return {
      isBalanceTree: true,
      level: 1
    }
  }

  let leftData = checkBalanceTree(root.left)
  let rightData = checkBalanceTree(root.right)

  return {
    isBalanceTree: leftData.isBalanceTree && rightData.isBalanceTree 
      && (Math.abs(leftData.level - rightData.level) <= 1),
    level: Math.max(leftData.level, rightData.level) + 1
  } 
}

console.log(checkBalanceTree(commonTree).isBalanceTree)
console.log(checkBalanceTree(completeTree).isBalanceTree)