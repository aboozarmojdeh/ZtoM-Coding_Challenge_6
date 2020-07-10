let testArray = [1, 2, 4, '1','2','1',591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20,'3','5','4','4'];
// Using bubble sort method for sorting the numbers of Array.
const bubbleSort = (array) => {
  let len = array.length;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
};
/////////////////////////////////////////////////////////
// Cleaner function which cleans number or string function. it's a reusable function.

const arrCleaner = (arr) => {
  let tempArr = []; // temp area to keep same number
  let finalArr = []; // array for keeping all same values

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) { // here check current value with next one
      tempArr.push(arr[i]);
    } else if (arr[i] === arr[i - 1]) { // here check current value with prev one
      tempArr.push(arr[i]);
      finalArr.push(tempArr);
      tempArr = [];
    } else { // this else means this value is unique so it is directly pushes to finalArr
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
};

/////////////////////////////////////////////////////////////
// Main function which makes the final cleaned array

const cleanRoom = (arr) => {
  let numberArray = arr.filter((item) => typeof item === "number"); // removes any string from main array
  let stringArray = arr.filter((item) => typeof item === "string").sort(); // removes any number from main array and sort string array inplace
  let sortedArr = bubbleSort(numberArray); // sorts array of numbers with bubble sort method
  let clearRoomArr = [];
  let numberCleanedArr = arrCleaner(sortedArr); // reusable function to make clean number array
  let stringCleanedArr = arrCleaner(stringArray); // reusable function to make clean string array

  return clearRoomArr.concat(numberCleanedArr, stringCleanedArr);
};


//////////////////////////////////////////////////////////

cleanRoom(testArray);