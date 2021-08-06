let trees = require('./testTree')
let tree = trees.commonTree

// 最基本的bfs
function bfs(root) {
  if (!root) return;
  let queue = []
  let res = []
  queue.push(root)
  while (queue.length) {
    let treeNode = queue.shift()
    res.push(treeNode.val)
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
  return res
}

// 逐层搜索的bfs
function bfs2(root) {
  if (!root) return
  let queue = []
  let res = []
  let max = Number.MIN_VALUE
  queue.push(root)
  while (queue.length) {
    let l = queue.length
    max = Math.max(max, l)
    res.push([])
    for (let i = 0; i < l; i++) {
      let treeNode = queue.shift()
      res[res.length - 1].push(treeNode.val)
      if (treeNode.left) queue.push(treeNode.left)
      if (treeNode.right) queue.push(treeNode.right)
    }
  }
  return {
    res: res,
    max: max
  }
}

// 之字形搜索的bfs
function bfs3(root) {
  if (!root) return
  let queue = []
  let res = []
  queue.push(root)
  let level = 1
  while (queue.length) {
    let l = queue.length
    res.push([])
    for (let i = 0; i < l; i++) {
      let treeNode = queue.shift()
      level % 2 ? res[res.length - 1].push(treeNode.val) : res[res.length - 1].unshift(treeNode.val)
      if (treeNode.left) queue.push(treeNode.left)
      if (treeNode.right) queue.push(treeNode.right)
    }
    level++
  }
  return res
}

console.log('--------最基本的bfs：--------')
console.log(bfs(tree))

console.log('--------逐层搜索的bfs：--------')
console.log(bfs2(tree).res)
console.log('同时也可求解到二叉树的宽度：', bfs2(tree).max)

console.log('--------之字形搜索的bfs：--------')
console.log(bfs3(tree))