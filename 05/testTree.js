let commonTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4
      }
    }, 
    right: {
      val: 5,
      right: {
        val: 6
      }
    }
  },
  right: {
    val: 7,
    right: {
      val: 8
    }
  }
}

let searchTree = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1
      }
    }, 
    right: {
      val: 4,
      right: {
        val: 5
      }
    }
  },
  right: {
    val: 7,
    right: {
      val: 8
    }
  }
}

let completeTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4
      },
      right: {
        val: 5
      }
    }, 
    right: {
      val: 6
    }
  },
  right: {
    val: 7,
    left: {
      val: 8
    },
    right: {
      val: 9
    }
  }
}

module.exports = {
  commonTree: commonTree,
  searchTree: searchTree,
  completeTree: completeTree
}