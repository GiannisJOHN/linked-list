
class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }
}
//methods: addFirst, addLast, removeFirst, removeLast, traverse, reverseList, size, clear, isEmpty, insertAt, removeAt, getAt

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
        let current = this.head
        let prev = null
        let next


        while (current !== null) {
            next = current.next

            current.next = prev

            prev = current
            current = next
        }

        this.head = prev
        
    }
    /*
    insertAt(index, data) {
        if (index < 0) {
            throw new Error('Index cannot be negative.')
        }

        let newNode = new Node(data)

        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            let prev = null
            let currentIndex = 0

            while (current !== null && currentIndex < index) {
                prev = current
                current = current.next
                currentIndex++
            }
            // if the loop completes and currentIndex is still less than the desired index, it means the index is out of bounds, and an error is thrown.
            if (currentIndex < index) {
                throw new Error('Index out of bounds.');
            }

            newNode.next = current
            prev.next = newNode
        }
    }
    */
   insertAt(index, data) {
    
        }


   }

    getAt(index) {
        if (index < 0) {
            throw new Error('Index cannot be negative.')
        }

        let current = this.head
        let currentIndex = 0

        while (current !== null && currentIndex < index) {
            current = current.next
            currentIndex++
        }

        if (currentIndex < index) {
            throw new Error('Index out of bounds.');
        }

        return current.data
    }
}

let List = new LinkedList

List.addFirst('Janis')
List.addFirst('Nikoleta')
//console.log(List)
//List.removeFirst()
//console.log(List)
List.addFirst('Maria')
//console.dir(List, { depth: null})
//List.reverseList()
//List.removeLast()
List.insertAt(2, 'hullio')
//List.insertAt(0, 'kate')
//List.insertAt(10, 'ioannis')
List.reverseList()
console.dir(List, { depth: null})
