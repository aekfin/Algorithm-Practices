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

function MergeKSortedLists (lists) {
  var node = null
  var head = null
  while (lists.length > 0){
    var less = {
      value: 10000,
      node: null
    }
    for (var i = 0; i < lists.length; i++) {
      if (less.value > lists[i].data) {
        less.value = lists[i].data
        less.index = i
      }
    }
    if (lists.length > 0 && less.value !== 10000) {
      if (node) {
        node.next = new Node(less.value, null)
        node = node.next
      } else {
        node = new Node(less.value, null)
        head = node
      }
    }
    if (lists[less.index]) {
      lists[less.index] = lists[less.index].next
    }
    for (var i = 0; i < lists.length; i++) {
      if (!lists[i]) {
        lists.splice(i, 1)
      }
    }
  }

  return head
}

var listA = new Node(1, new Node(7, new Node(50, null)))
var listB = new Node(2, new Node(5, new Node(6, null)))
var listC = new Node(3, new Node(10, new Node(100, null)))
var listD = new Node(4, new Node(20, new Node(200, null)))
var list = [listA, listB, listC, listD]
MergeKSortedLists(list).print()
