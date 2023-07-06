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
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    addLast(value) {
        let newNode = new Node(value)

        let current = this.head
        let lastNode
        while(current !== null) {
            if (current.next === null) {
                lastNode = current
            }
            current = current.next
        }
        lastNode.next = newNode
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
        let previous
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
        let previous
        let currentIndex = 0
        let value

        while(currentIndex < index) {
            previous = current
            current = current.next
            currentIndex++
        } 
        value = current.value
        previous.next = current.next
        console.log(value);

    }
}

let list = new List()

list.addFirst('Monday')
list.addFirst('Tuesday')
list.addFirst('Wednesday')
list.reverse()
list.insertAt(3, 'Friday')
list.addLast('Saturday')
list.removeAt(4)

console.dir(list.head, {depth: null})





