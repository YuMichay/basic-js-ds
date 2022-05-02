const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    this._root = addNode(this._root, data);
    function addNode(node, data){
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this._root, data);
    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this._root, data);
    function findNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      } else {
        return node;
      }
    }
  }

  remove(data) {
    return removeNode(this._root, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          let minRight = node.right;
          while(minRight.left) {
          minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode(node.right, node.data);
        }
      }
      return node;
    }
  }

  min() {
    if (!this._root) {
      return;
    }
    let node = this._root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this._root) {
      return;
    }
    let node = this._root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};