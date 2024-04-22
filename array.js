//Input: [2,5,6,9], [1,2,3,29]
//Output: [1, 2, 2, 3, 5, 6, 9, 29]
const arr = [1, 2, 5, 6, 9] 
const arr2 = [1, 2, 3, 29];
const newArr = arr.concat(arr2);
const res = newArr.sort((a, b) => {
  return a-b;
});
 console.log(res);

