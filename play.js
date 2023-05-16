
class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    addFirst(data) {
        let newNode = new Node(data, this.head)
        this.head = newNode
    }

    removeFirst() {
        this.head = this.head.next
    }

    addLast(data) {
        let newNode = new Node(data)

        let lastNode = null

        let current = this.head

        while(current !== null) {
            if (current.next === null) {
               lastNode = current
            }
            current = current.next
        }
        lastNode.next = newNode
    }

    removeLast() {
        let current = this.head

        while(current !== null) {
            if (current.next.next === null) {
                current.next = null
            }

            current = current.next
        }
    }


    reverseList() {
        let prev = null
        let current = this.head
        let next

        while(current !== null) {
            // null - maria - janis - nikos - helene
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }
}

let List = new LinkedList

List.addFirst('Janis')
List.addFirst('Nikoleta')
console.log(List)
List.removeFirst()
console.log(List)
List.addFirst('Maria')
List.addLast('Giorgos')
console.dir(List, { depth: null})
List.reverseList()
//List.removeLast()
console.dir(List, { depth: null})
