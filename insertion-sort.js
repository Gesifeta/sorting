// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */
  // Your code here
  //to store counters
  let i, j;
  //to store temporary items to insert
  let temp;
  //to store sorted items2
  let sorted = [];
  //loop throught the arr in reverse order;
  for (i = arr.length - 1; i >= 0; i--) {
    //console.log(sorted.join(','))
    //grab nth array
    temp = arr[i];
    //loop through the sorted array and compaire it with temp value;
    for (j = sorted.length - 1; j >= 0 && temp < sorted[j]; j--) {
      // if sorted nth arr is greater swap
      sorted[j + 1] = sorted[j];
    }
    //else
    sorted[j + 1] = temp
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
  //to store the arrays counter and temporary value
  let i, j;
  //loop through the array
  for (i = 1; i < arr.length; i++) {
    //console.log(arr.join(','))
    //grab the nth arr
    temp = arr[i];
    //now compaire temp with the sorted arr by looping through the array again
    //if temp is less than the n[j] array swap with it, otherwise
    //insert the temp;
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp;

  }
  return arr;

  // Your code here
}
class Item {
  constructor(defaultCapacity = 8) {
    this.data = [];
    this.capacity = defaultCapacity
    this.data.length = defaultCapacity
    this.count = 0;
  }
  add(value) {

    this.data[this.count] = value;
    this.count++;

  }
  display() {
    return this.data
  }
}
let item = new Item()
let arr = [];
const n = 50000000;
let addingArrayStart = Date.now()
for (let i = 0; i < n; i++) {
  item.add(Math.trunc(Math.random() * n))
  //arr.push(Math.trunc(Math.random() * n))
}
let addingArrayEnd = Date.now();
console.log(`Adding ${n} elements using my custom Push takes ${addingArrayEnd - addingArrayStart} ms`)
for (let i = 0; i < n; i++) {
  // item.add(Math.trunc(Math.random() * n))
  arr.unshift(Math.trunc(Math.random() * n))
}
let addingUsingPushEnd = Date.now();
console.log(arr)
console.log(`Adding ${n} elements using built-in push takes ${addingUsingPushEnd - addingArrayEnd} ms`)

console.log(item.display())
// let insertionSortInPlaceStart = Date.now();
// insertionSortInPlace(arr);
// let insertionSortInPlaceEnd = Date.now();
// console.log(`Sorting done for out of place in ${insertionSortInPlaceEnd - insertionSortInPlaceStart} ms`)
// insertionSort(arr)
// let insertionSortOutOfPlaceEnd = Date.now();
// console.log(`Sorting done for out of out of place in ${insertionSortOutOfPlaceEnd - insertionSortInPlaceStart} ms`)
// module.exports = [insertionSort, insertionSortInPlace];