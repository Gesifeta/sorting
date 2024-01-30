let bubbleSort = (arr) => {
    //bubble sort
    /*Pseudocode
    1.iterate throught the array
    2.if the current array is greater then the next, swap
    3.if there is no item to swap, return new arra;
    4. continue to step 1*/
    let temp;
    let numItem = arr.length;
    while (numItem >= 0) {
        for (let i = 0; i < arr.length; i++) {

            if (i === arr.length - 1) continue;
            if (arr[i] < arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp;
            }

        }
        numItem--
    }

    return arr;
}
console.log(bubbleSort([3, 2, 0, 2, 4, 16, 4, 1]))