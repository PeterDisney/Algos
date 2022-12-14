/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
 class BSTNode {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  isEmpty() { 
      return this.root === null;
  }

  min(current = this.root) { 
      // BST IS EMPTY
      if(this.isEmpty()){
          return null;
      }
      // BST IS NOT EMPTY
      let runner = current;
      while(runner.left != null){
          runner = runner.left
      }
      return runner.data
  }

  minRecursive(current = this.root) { 
      // BASE CASE
      if(current.left === null){
          return current.data
      }
      // FORWARD PROGRESS
      // RECURSIVE CALL
      return this.minRecursive(current.left)
  }

  max(current = this.root) {
    if(this.isEmpty()){
      return null;
    }
    // if bst is not empty
    let runner = current;
    while(runner.right != null){
      runner = runner.right
    }
    return runner.data;
   }

  maxRecursive(current = this.root) {
    // BASE CASE
    if(current.right == null){
      return current.data;
    }
    // FORWARD PROGRESS
    // RECURSIVE CALL 
    return this.maxRecursive(current.right)
   }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
      if (!node) {
          return;
      }

      spaceCnt += spaceIncr;
      this.print(node.right, spaceCnt);

      console.log(
          " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${node.data}`
      );

      this.print(node.left, spaceCnt);
  }
}

// TEST CASES
const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
      root
      10
    /   \
  5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
      root
      10
    /   \
  5     15
/ \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

// console.log(threeLevelTree.minRecursive())
threeLevelTree.print()
console.log(threeLevelTree.maxRecursive())
