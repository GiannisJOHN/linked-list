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
        
    }

    addLast(value) {

    }

    reverse() {

    }

    insertAt(index, value) {
    }

    removeAt(index) {

    }
}

let list = new List()

list.addFirst('Monday')
list.addFirst('Tuesday')
list.addFirst('Wednesday')
list.reverse()
//list.insertAt(3, 'Friday')
//list.addLast('Saturday')
//list.removeAt(4)

console.dir(list.head, {depth: null})