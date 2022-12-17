/* 
Intro to Singly Linked Lists
 - OOP
 - Array VS SLL
*/
class SLNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class SLL {
  constructor() {
    this.head = null;
  }
  seedFromArray(vals){
    for (let data of vals) {
        this.insertFromBack(data)
    }
    return this
}

  //  MONDAY -------------------------------------------------------------------//
  /**
   * Prints all the nodes in the list to the console.
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list.
   */
  isEmpty() {
    if (this.head === null) {
      return true
    }
    return false
  }
  printValues() {
    // SLL IS EMPTY
    if (this.isEmpty()) {
      console.log("SLL IS EMPTY")
    }
    // SLL IS NOT EMPTY
    let runner = this.head
    while (runner != null) {
      console.log(runner.value)
      runner = runner.next.next
    }
  }
//   //  TUESDAY -------------------------------------------------------------------//
//   //  TUESDAY -------------------------------------------------------------------//
//   /**
//    * Creates a new node with the given data and inserts it at the back of
//    * this list.
//    * - Time: (?).
//    * - Space: (?).
//    * @param {any} data The data to be added to the new node.
//    * @returns {SinglyLinkedList} This list.
//    */
//   insertAtBack(data) {
//     // SLL IS EMPTY
//     // CREATE A NEW NODE WITH THE GIVEN DATA
//     let NewNode = new SLNode(data)
//     if (this.isEmpty()) {
//       console.log("SLL IS EMPTY")
//       // POINT THE HEAD TO THE NEW NODE
//       this.head = NewNode
//       // RETURN
//       return
//     }
//     // SLL IS NOT EMPTY
//     // CREATE A RUNNER AT THE HEAD
//     let runner = this.head
//     // RUN THE RUNNER UNTIL IT GETS TO THE LAST NODE
//     while (runner.next != null) {
//       // console.log(runner.value)
//       runner = runner.next
//     }
//     // POINT THE RUNNER'S NEXT TO THE NEW NODE
//     runner.next = NewNode
//     return
//   }

//   /**
//    * Adds each item of the given array to the back of this list.
//    * - Time: (?).
//    * - Space: (?).
//    * @param {Array<any>} vals The data for each new node.
//    * @returns {SinglyLinkedList} This list.
//    */
//   seedFromArr(vals) {
//     for (let i = 0; i < vals.length; i++) {
//       this.insertAtBack(vals[i])
//     }
//     return
//   }


// WEDNESDAY -------------------------------------------------------------------//

/**
* Creates a new node with the given data and inserts that node at the front
* of this list.
* - Time: (?).
// * - Space: (?).
// * @param {any} data The data for the new node.
// * @returns {SinglyLinkedList} This list.
// */
insertAtFront(data) {
  let NewNode = new SLNode(data);
  // SLL IS EMPTY
  if (this.isEmpty()) {
    this.head = NewNode;
    return this
  }
  // SLL IS NOT EMPTY
  NewNode.next = this.head;
  this.head = NewNode;
  return
}

/**
 * Removes the first node of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data from the removed node.
 */
removeAtFront() {
  // SLL IS EMPTY
  if(this.isEmpty()){
    return this
  }
  // let NewNode = new SLNode(data)
  // if (this.head == null) {
  //   console.log("SLL IS EMPTY")
  //   this.head = NewNode
  //   return null
  // }
  // let tempNode = this.head;
  // this.head = this.head.next;
  // return tempNode.value

  // SLL IS NOT EMPTY
  this.head = this.head.next;
  return this

  // MOVE HEAD TO NEXT NODE
}

// EXTRA
/**
 * Calculates the average of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {number|NaN} The average of the node's data.
 */
average() {
  let total = 0;
  let length = 0;
  let runner = this.head;
  while(runner !== null){
    length++;
    total+= runner.value;
    runner= runner.next;
  
  }
  console/log(`Average is: ${total/length}`)
  return this
}
// THURSDAY --------------------------------------------------------------------//

/**
 * Removes the last node of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data from the node that was removed.
 */
 removeBack() {
  // SLL IS EMPTY
  if (this.head == null) {
  }
  else if (this.head.next == null) {
    // SLL HAS 1 NODE
    this.head.next = null;
  }
  // SLL IS NOT EMPTY
  else {
    let runner = this.head;
    while (runner.next.next != null) {
      runner = runner.next;
    }
    runner.next = null;
  }
  return this;
}


/**
 * Determines whether or not the given search value exists in this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} val The data to search for in the nodes of this list.
 * @returns {boolean}
 */
  contains(target) {
    // Is empty?
    if (this.isEmpty()){
        return false
    }
    // Run through the Singly Linked List
    let runner = this.head; 
    while (runner !== null){
        // Checking if runner's value is the target
        if (runner.value == target) {
            return true
        }
        runner = runner.next
    }
    // Did not find
    return false
  // CREATE A RUNNER AT THE HEAD
  // HAVE THE RUNNER GO THROUGH THE SLL
  // CHECK TO SEE IF THE RUNNER VALUE MATCHES THE TARGET
  // RETURN TRUE IF THE VALUE MATCHES THE TARGET
  // GO TO THE NEXT NODE
  // RETURN FALSE IF THE RUNNER GOES OUT OF BOUNDS
}
// EXTRA
/**
 * Determines whether or not the given search value exists in this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} val The data to search for in the nodes of this list.
 * @param {?node} current The current node during the traversal of this list
 *    or null when the end of the list has been reached.
 * @returns {boolean}
 */
containsRecursive(val, current = this.head) {

}
// FRIDAY ----------------------------------------------------------------------//

/**
 * Removes the node that has the matching given val as it's data.
 * - Time: (?).
 * - Space: (?).
 * @param {any} val The value to compare to the node's data to find the
 *    node to be removed.
 * @returns {boolean} Indicates if a node was removed or not.
 */
removeVal(val) {
  // LIST IS EMPTY
  // LIST HAS ONE NODE
  // LIST HAS MANY NODES
  // CREATE A RUNNER AT THE HEAD
  // RUN THROUGH THE SLL
  // CHECK FOR THE RUNNERS NEXT VALUE
  // IF THE VALUE IS FOUND
  // CREATE A TEMP VARIABLE POINTING TO THE RUNNERS NEXT NODE
  // POINT THE RUNNER POINT AND SKIP TO THE NEXT NEXT NODE
  // USING THE temp VARIABLE, POINT THE NEXT TO NULL
  // RETURN true
  // RETURN false
}

/**
 * Retrieves the data of the second to last node in this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
// retrieves 2nd to last data in node
secondToLast(){
  // SLL IS EMPTY
  if (this.isEmpty()) {
      return null;
  }
  // SLL HAS ONE
  if (this.head.next === null) {
      console.log(`SLL DOESN'T HAVE 2 VALUES`)
      return null;
  }
  // SLL IS NOT EMPTY
  let runner = this.head;
  while (runner.next.next.next !== null) {
      runner = runner.next;
  }
  return runner.next.value;
}

//  FRIDAY EXTRA
/**
 * Retrieves the data of the kth to last node in this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {any} The data of the kth to last node or null if there is no
 *    kth to last node.
 */
 kthToLast(k) {
  // check if empty
  if (this.isEmpty()) {
      return null
  }
  var length = 1
  let runner = this.head
  // determine length of the list
  while (runner.next != null) {
      length++
      runner = runner.next
  }
  // check to see if the requested node exists, exit if it does not
  if (length-1 < k) {
      return null
  }
  runner = this.head
  // otherwise, move through list to the proper node and return the value
  for (var i=0; i<length-k-1; i++){
      runner = runner.next
  }
  return runner.value

}

}

//==========================//
//         TESTING          //
//==========================//


let sll = new SLL();
// sll.insertAtBack(1)
// sll.insertAtBack(2)
// sll.insertAtBack(3)
// sll.insertAtBack(4)
// sll.insertAtBack(5)

// sll.printValues()
// sll.seedFromArr([1, 2, 3, 4, 5, 6])
sll.insertAtFront(10)
// sll.removeAtFront()
sll.printValues()
console.log(sll.average())


let slnode = new SLNode("a")
// let runner = slnode
// slnode.value = "b"
// console.log(runner)

// let newSLL = new SLL()

let slNode1 = new SLNode('a')
let slNode2 = new SLNode('b')
// newSLL.head = slNode1
// slNode1.next = slNode2