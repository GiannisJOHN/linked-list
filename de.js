class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class List {
    constructor() {
        this.head = null
    }

    addFirst(value) {
        this.head = new Node(value, this.head)
    }

    addLast(value) {

    }

    reverse() {
        let current = this.head
        let previous = null
        let next

        while(current !== null) {
            next = current.next
            current.next = previous
            previous = current
            current = next
        }

        this.head = previous
    }

    insertAt(index, value) {
        let newNode = new Node(value)
        let current = this.head
        let previous = null
        let currentIndex = 0

        while(currentIndex < index) {
            previous = current
            current = current.next
            currentIndex++
        }

        previous.next = newNode
        newNode.next = current

    }

    removeAt(index) {
        let current = this.head
        let previous = null
        let currentIndex = 0

        while(currentIndex < index) {
            previous = current
            current = current.next
            currentIndex++
        }

        previous.next = current.next

    }
}

let list = new List()

list.addFirst('Monday')
list.addFirst('Tuesday')
list.addFirst('Wednesday')
list.reverse()
list.insertAt(2, 'Friday')
//list.addLast('Saturday')
list.removeAt(1)

console.dir(list.head, {depth: null})