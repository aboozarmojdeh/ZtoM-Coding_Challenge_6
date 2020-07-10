let testArray = [3, 5, 12, 7, 1, 9, 0];
const sumFinder = (arr, num) => {
  let temp = 0;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      temp = arr[i] + arr[j];
      if (temp === num) {
        answer.push(arr[i], arr[j]);
      }
    }
  }
  return answer.length > 0 ? answer : `No match found`;
};

sumFinder(testArray, 7);
