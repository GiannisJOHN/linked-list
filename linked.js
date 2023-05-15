// singly linked list

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertAtBeginnig(data) {
        let nextNode = this.head
        let newNode = new Node(data, nextNode)

        //make head to point to the last inserted node
        this.head = newNode
        this.size++
    }

    getNodeAt(index) {
        if (index < 0 || index > this.size - 1) {
          return undefined;
        } else {
          let currentNode = this.head
            for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
            }
            return currentNode
        }
    }

    print() {
        let current = this.head

        while (current !== null) {
            console.log(current.data);
            current = current.next
        }
    }
}

let numberList = new LinkedList
numberList.insertAtBeginnig(1)
numberList.insertAtBeginnig(2)
numberList.insertAtBeginnig(3)
numberList.insertAtBeginnig(4)


//

numberList.print()
console.log('number of nodes: ', numberList.size)
console.log('second node value: ', numberList.getNodeAt(2).data);

//console.dir(numberList, { depth: null });