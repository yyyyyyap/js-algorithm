let commonList = {
  val: 1,
  next: {
    val: 2, 
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5
        }
      }
    }
  }
}

let paliList = {
  val: 1,
  next: {
    val: 2, 
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1
        }
      }
    }
  }
}

module.exports = {
  commonList: commonList,
  paliList: paliList
} 