class Heap {
  constructor() {
    this.heap = [];
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  add(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  // Removing an element will remove the
  // top element with highest priority then
  // bubbleDown will be called
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown();
    return item;
  }

  bubbleUp() {}

  bubbleDown() {}
}

class MaxHeap extends Heap {
  bubbleUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      const largerChildIndex =
        this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)
          ? this.getRightChildIndex(index)
          : this.getLeftChildIndex(index);
      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      const smallerChildIndex =
        this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)
          ? this.getRightChildIndex(index)
          : this.getLeftChildIndex(index);
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

// Creating the Heap
const maxHeap = new MaxHeap();

// Adding The Elements
maxHeap.add(10);
maxHeap.add(15);
maxHeap.add(30);
maxHeap.add(40);
maxHeap.add(50);
maxHeap.add(100);
maxHeap.add(40);

// Printing the Heap
console.log(maxHeap.heap);

// Peeking And Removing Top Element
console.log(maxHeap.peek());
console.log(maxHeap.remove());

// Printing the Heap
// After Deletion.
console.log(maxHeap.heap);

// Creating the Heap
const minHeap = new MinHeap();

// Adding The Elements
minHeap.add(10);
minHeap.add(15);
minHeap.add(30);
minHeap.add(40);
minHeap.add(50);
minHeap.add(100);
minHeap.add(40);

// Printing the Heap
console.log(minHeap.heap);

// Peeking And Removing Top Element
console.log(minHeap.peek());
console.log(minHeap.remove());

// Printing the Heap
// After Deletion.
console.log(minHeap.heap);
