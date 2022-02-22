/**
 * Singly Linked List
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.isEmpty()) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) return null;

    if (index === 0) {
      return this.head;
    }

    let current = this.head;
    let iterator = 0;

    while (iterator !== index) {
      current = current.next;
      iterator++;
    }
    return current;
  }

  insert(value, index) {
    if (index < 0 || index > this.length || this.isEmpty()) return null;
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.push(value);
    let newNode = new Node(value);
    let prevValue = this.get(index - 1);
    let temp = prevValue.next;
    prevValue.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  shift() {
    if (!this.head) return null;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  remove(index) {
    if (index < 0 || index > this.length || this.isEmpty()) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  printList() {
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const mySinglyLinkedList = new SinglyLinkedList();

mySinglyLinkedList.push("HI!");
mySinglyLinkedList.push("How are you");
mySinglyLinkedList.push("!");

mySinglyLinkedList.prepend("1");
mySinglyLinkedList.prepend("2");

mySinglyLinkedList.push("4");

console.log(">>", mySinglyLinkedList.printList());
mySinglyLinkedList.reverse();
console.log(">>", mySinglyLinkedList.printList());
