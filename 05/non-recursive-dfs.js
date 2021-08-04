let tree = require('./testTree')
// let tree = null

// 前序遍历
function preorder(root) {
  if(!root) return
  let stack = []
  let res = []
  stack.push(root)
  while(stack.length) {
    let treeNode = stack.pop()
    res.push(treeNode.val)
    if(treeNode.right) stack.push(treeNode.right)
    if(treeNode.left) stack.push(treeNode.left)    
  }
  return res
}

// 中序遍历
function inorder(root) {
  if(!root) return
  let stack = []
  let res = []
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    let treeNode = stack.pop()
    res.push(treeNode.val)
    cur = treeNode.right
  }
  return res
}

// 后序遍历
// 先序遍历的输出顺序为：中-左-右，调整压栈的顺序将输出顺序改为：中-右-左，并压进另一个栈
// 因为出栈跟入栈的顺序相反，逐个遍历另一个栈，输出顺序变为： 左-右-中，即为后序遍历
function postorder(root) {
  if(!root) return
  let stack = []
  let anotherStack = []
  let res = []
  stack.push(root)
  while(stack.length) {
    let treeNode = stack.pop()
    anotherStack.push(treeNode)
    if(treeNode.left) stack.push(treeNode.left)    
    if(treeNode.right) stack.push(treeNode.right)
  }
  while(anotherStack.length) {
    res.push(anotherStack.pop().val)
  }
  return res
}

console.log("先序遍历：")
console.log(preorder(tree))
console.log("中序遍历：")
console.log(inorder(tree))
console.log("后序遍历：")
console.log(postorder(tree))