// https://leetcode.com/problems/merge-k-sorted-lists/description/

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

function MergeKSortedLists (listA, listB) {
  var a = listA
  var b = listB
  var node = null
  var head = null
  while (a && b) {
    var less = null
    if (a.data < b.data) {
      less = a.data
      a = a.next
    } else {
      less = b.data
      b = b.next
    }
    if (node) {
      node.next = new Node(less, null)
      node = node.next
    } else {
      node = new Node(less, null)
      head = node
    }
  }
  if (a) {
    var left = a
  } else {
    var left = b
  }
  while (left) {
    node.next = new Node(left.data, null)
    node = node.next
    left = left.next 
  }

  return head
}

var listA = new Node(1, new Node(7, new Node(8, null)))
var listB = new Node(2, new Node(5, new Node(6, null)))
MergeKSortedLists(listA, listB).print()
