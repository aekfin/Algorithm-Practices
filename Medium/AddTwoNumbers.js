// https://leetcode.com/problems/add-two-numbers/description/

class Node {
  constructor (num, next) {
    this.data = num
    this.next = next
  }
  print () {
    var str = String(this.data)
    var p = this.next
    while (p) {
      str += ' -> ' + p.data
      p = p.next
    }
    console.log(str)
  }
}

function Addition (a, b) {
  var excess = 0
  var node = []
  while (a && b) {
    var sum = a.data + b.data
    node.push(new Node((sum + excess) % 10, null))
    excess = parseInt(sum / 10)
    a = a.next
    b = b.next
  }
  for (var i = 0; i < node.length - 1; i++) {
    node[i].next = node[i + 1]
  }

  return node[0]
}

var listA = new Node(2, new Node(4, new Node(3, null))) 
var listB = new Node(5, new Node(6, new Node(4, null))) 
Addition(listA, listB).print()

