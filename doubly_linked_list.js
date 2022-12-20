/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // TODO: implement the constructor.
    // true if empty
    
  }
  isEmpty(){
      return this.head === null;
  }
  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(value) {
    console.log(`Inserting ${value} to the front...`);
        const newNode = new DLLNode(value);
        // DLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // DLL IS NOT EMPTY
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(value){
    console.log(`Inserting ${value} to the back...`);
    const newNode = new DLLNode(value);
    // DLL IS EMPTY
    if (this.isEmpty()){
        this.head = newNode;
        this.tail = newNode;
        return this;
    }
    // DLL IS NOT EMPTY
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return this;
}
}