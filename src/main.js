import "./styles.css";

export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;

    }
}

export class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        } 

        let current = this.headNode;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    count() {
        let current = this.headNode;
        let i = 1;
        if (current == null) {
            return 0;
        };

        while (current.nextNode !== null) {
            i += 1;
            current = current.nextNode;

        }; return i;
    };

    head() {
        let current = this.headNode;
        if (current === null) {
            return undefined
        }; return current.value
    }

    tail() {
        let current = this.headNode;
        if (current === null) {
            return undefined
        }

        while (current.nextNode !== null) {
            current = current.nextNode;
        }; 
        
        return current.value
    }

    at(index) {
        let current = this.headNode;
        if (current === null) {
            return undefined
        }

        let i = 0;
        while (i < index) {
            if (current.nextNode === null) {
                return undefined
            } 

            i += 1
            current = current.nextNode;
        }; return current.value
    }

    pop() {
        let removedHeadNode = this.headNode;
        if (removedHeadNode === null) {
            return undefined
        }

        let newHeadNode = removedHeadNode.nextNode
        this.headNode = newHeadNode;
        removedHeadNode.nextNode = null;
        return removedHeadNode.value;
    }

    contains(value) {
        let current = this.headNode
        while (current !== null) {
            if (current.value === value) {
                return true
            }
            current = current.nextNode
        } return false;
    } 

    findIndex(value) {
        let current = this.headNode;
        let i = 0;

        while (current !== null) {
            if (current.value === value) {
                return i
            }
            i += 1
            current = current.nextNode
        } return -1
    }

    toString() {
        let current = this.headNode;
        let string = ""

        if (current === null) {
            return ""
        }

        while (current !== null) {
            string += `( ${current.value} ) -> `

            current = current.nextNode
        } return string += `${null}`
    }

    insertAt(index, ...values) {

        if (index < 0 ) {
            throw new RangeError("This input is out of range.")
        };

        if (values.length === 0) {
            return "There are no values to be inserted."
        }

        let dummyHead = new Node(null)
        let tail = dummyHead

        for (const value of values) {
            tail.nextNode = new Node(value)
            tail = tail.nextNode
        }

        let newNodeHead = dummyHead.nextNode
        let newNodeTail = tail

        if (index === 0) {
            newNodeTail.nextNode = this.headNode;
            this.headNode = newNodeHead;
            
        } else {
            if (this.headNode === null) {
            throw new RangeError("This input is out of range.");
        }
            let i = 1;
            let current = this.headNode;

            while (index > i ) {
                if (current.nextNode === null) {
                    throw new RangeError("This input is out or range.") 
                }

                i += 1;
                current = current.nextNode
            } 
            newNodeTail.nextNode = current.nextNode
            current.nextNode = newNodeHead            
        }
    }
};




