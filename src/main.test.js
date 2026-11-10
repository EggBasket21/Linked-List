import { LinkedList } from "./main.js";
import { Node } from "./main.js";


test('Initializing linked list with null head node', () => {

    const linkedList = new LinkedList
    expect(linkedList).toBeInstanceOf(LinkedList);
    expect(linkedList.headNode).toBeNull();

});

test('Initializing new node class', () => {

    const newNode = new Node;
    expect(newNode).toBeInstanceOf(Node);

});


test('Testing LinkedList class - append method', () => {

    const linkedList = new LinkedList

    linkedList.append('one');
    linkedList.append('two');
    linkedList.append('three');

    expect(linkedList.headNode.value).toBe('one');
    expect(linkedList.headNode.nextNode.value).toBe('two');
    expect(linkedList.headNode.nextNode.nextNode.value).toBe('three');
    expect(linkedList.headNode.nextNode.nextNode.nextNode).toBeNull();

});

test('Testing LinkedList class - prepend method', () => {
    const linkedList = new LinkedList

    linkedList.prepend('one');
    linkedList.prepend('two');
    linkedList.prepend('three');

    expect(linkedList.headNode.value).toBe('three');
    expect(linkedList.headNode.nextNode.value).toBe('two');
    expect(linkedList.headNode.nextNode.nextNode.value).toBe('one');
    expect(linkedList.headNode.nextNode.nextNode.nextNode).toBeNull();

});


test('Testing LinkedList class - count method', () => {

    const linkedList = new LinkedList
    expect(linkedList.count()).toBe(0);
    
    linkedList.append('one');
    expect(linkedList.count()).toBe(1);

    linkedList.append('two');
    expect(linkedList.count()).toBe(2);

    linkedList.append('three');
    expect(linkedList.count()).toBe(3);

});

test('Testing LinkedList class - head method', () => {

    const linkedList = new LinkedList
    expect(linkedList.head()).toBeUndefined()

    linkedList.append('one');
    expect(linkedList.head()).toBe('one');

    linkedList.prepend('two');
    expect(linkedList.head()).toBe('two');

});

test('Testing LinkedList class - tail method', () => {

    const linkedList = new LinkedList
    expect(linkedList.tail()).toBeUndefined()

    linkedList.append('one');
    expect(linkedList.tail()).toBe('one');

    
    linkedList.append('two');
    expect(linkedList.tail()).toBe('two');

})

test('Testing LinkedList class - at method - returns value of node with given index', () => {
     
    const linkedList = new LinkedList

    linkedList.append('one')
    expect(linkedList.at(0)).toBe('one')

    linkedList.append('two')
    expect(linkedList.at(1)).toBe('two')

    linkedList.append('three')
    expect(linkedList.at(2)).toBe('three')

    expect(linkedList.at(5)).toBe

})

test('Testing LinkedList class - pop method - Remove headNode and return its value', () => {

    const linkedList = new LinkedList

    linkedList.append('one');
    linkedList.append('two');
    linkedList.append('three')
    const poppedLinkedList = linkedList.pop();

    expect(poppedLinkedList).toBe('one');
    expect(linkedList.headNode.value).toBe("two");
    expect(linkedList.headNode.nextNode.value).toBe("three");
    expect(linkedList.headNode.nextNode.nextNode).toBe(null);
})

test('Testing LinkedList class - contains method', () => {

    const linkedList = new LinkedList

    expect(linkedList.contains("one")).toBe(false);

    linkedList.append("one")
    linkedList.append("two")

    expect(linkedList.contains("one")).toBe(true);
    expect(linkedList.contains("three")).toBe(false);
})

test('Testing for LinkedList class - findIndex(value) method', () => {
    const linkedList = new LinkedList;
    
    linkedList.append("one")
    linkedList.append("two")
    linkedList.append("three")
    linkedList.append("one")

    expect(linkedList.findIndex("one")).toBe(0);
    expect(linkedList.findIndex("two")).toBe(1);
    expect(linkedList.findIndex("three")).toBe(2);
    expect(linkedList.findIndex("four")).toBe(-1);
})

test('Testing for LinkedList class - toString() method', () => {
    const linkedList = new LinkedList;

    expect(linkedList.toString()).toBe("")

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.toString()).toBe('( 1 ) -> ( 2 ) -> ( 3 ) -> null')

})

test("Testing insertAt() method", () => {
    const linkedList = new LinkedList;

    linkedList.append(1)
    linkedList.append(4)
    linkedList.append(5)

    const newLinkedList = linkedList.insertAt(1, 2, 3)

    expect(newLinkedList.toString()).toBe('( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) null')


})
