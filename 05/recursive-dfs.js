let trees = require('./testTree')
let tree = trees.commonTree

// 假设树结构为：[1, 2, 7, 3, 5, null, 8, 4, null, null, 6](层序遍历)
// 则递归序为：1, 2, 3, 4, 4, 4, 3, 3, 2, 5, 5, 6, 6, 6, 5, 2, 1, 7, 7, 8, 8, 8, 7, 1
// 前序遍历即为保留每一个值第一次出现的顺序
// 中序遍历为保留每一个值第二次出现的顺序
// 后序遍历为保留每一个值第三次出现的顺序

// 前序遍历
function preorder(root) {
  if (!root) return;

  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

// 中序遍历
function inorder(root) {
  if (!root) return;
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

// 后续遍历
function postorder(root) {
  if (!root) return;
  inorder(root.left)
  inorder(root.right)
  console.log(root.val)
}


console.log(tree)
console.log('前序遍历：')
preorder(tree)
console.log('中序遍历：')
inorder(tree)
console.log('后序遍历：')
postorder(tree)