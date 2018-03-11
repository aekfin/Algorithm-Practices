// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

class Node {
  constructor (data, next) {
    this.data = data
    this.next = next
  }
  print () {
    var str = this.data
    var p = this
    while (p.next) {
      str += ' -> ' + p.next.data
      p = p.next
    }
    console.log(str)
  }
}

function ReverseNodesK (nodes, k) {
  var size = 0
  var head = nodes
  var p = nodes
  var prev = nodes
  var temp = []
  while (p) {
    size++
    p = p.next
  }
  for (var i = 0; i < parseInt(size / k); i++) {
    temp = []
    for (var j = 0; j < k; j++) {
      temp.push(nodes)
      nodes = nodes.next
    }
    if (i === 0) {
      head = temp[temp.length - 1]
    } else {
      prev.next = temp[temp.length - 1]
    }
    for (var m = temp.length - 1; m >= 0; m--) {
      temp[m].next = temp[m - 1]
    }
    temp[0].next = nodes
    prev = temp[0]
  }
  return head
}

node = new Node(1 ,new Node(2, new Node(5, new Node(3, new Node(7, new Node(9, null))))))
node.print()
ReverseNodesK(node, 3).print()
