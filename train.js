class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertAtTheBeginning(data) {
        let newNode = new Node(data, this.head)
        this.head = newNode
    }

    insertAtEnd(data) {
        let newNode = new Node(data)

        let current = this.head
        let lastNode = null

        while(current !== null) {
            if (current.next === null) {
               lastNode = current
            } 
            current = current.next
        }
        lastNode.next = newNode
    }

    removeFromBeginning() {
        let valueOfFirstNode = this.head.data

        this.head = this.head.next

        return valueOfFirstNode
    }

    removeFromEnd() {
        let current = this.head

        while(current !== null) {
            if (current.next.next === null) {
               current.next = null
            } 
            current = current.next
        }
    }

    traverse() {
        let current = this.head
        let arrayOfValues = []

        while(current !== null) {
            arrayOfValues.push(current.data)
            current = current.next
        }

        return arrayOfValues
    }

    reverseList() {
        let current = this.head //object a
        
        
        
        //for the first iteration
        let prev = null
        let next
        while (current !== null) {
        //perno to proto object, ke prepi kapou na kano store to next point tou
          next = current.next //obj b
          console.log(next)
        // thelo na kani point sto proigoumeno node, alla prin to proto den iparxi opote dixni null
          current.next = prev //null
          console.log(current.next)


        //for the next iteration
          prev = current //object a
          console.log(prev)

          current =  next//object b
          console.log(current)
        }
        
        //the last node we visited
        this.head = prev //object a
      }
}

let names = new LinkedList()

names.insertAtTheBeginning('maria')
names.insertAtTheBeginning('nikos')
names.insertAtTheBeginning('giorgos')
//names.insertAtTheBeginning('sandra')
//names.insertAtEnd('kleopatra')
//names.insertAtEnd('Dimitris')
//names.removeFromEnd()
//console.dir(names.head, { depth: null})
names.reverseList()

//console.log('removed item:', names.removeFromBeginning())
//console.dir(names.head, { depth: null})
//console.log(names.traverse())