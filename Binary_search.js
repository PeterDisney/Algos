/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true; //1 for bonus

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true; //1 for bonus

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */

function binarySearch(sortedNums, searchNum) {
    let start = 0, end = sortedNums.length - 1;
    let count = 0
    // Iterate while start not meets end
    while (start <= end) {
        // Find the mid index
        let mid = Math.floor((start + end) / 2);
        // If element is present at mid, return True
        if (sortedNums[mid] === searchNum){
            for (var i = start; i <= end; i++) {
                if (sortedNums[i] === searchNum) {
                    count += 1;
                }
            }
            return count;
        } else if (sortedNums[mid] < searchNum){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
    }
    return false;
}
// function binarySearch(sortedNums, searchNum) {
//     let start = 0, end = sortedNums.length - 1;
//     let count = 0
//     // Iterate while start not meets end
//     while (start <= end) {
//         // Find the mid index
//         let mid = Math.floor((start + end) / 2);
//         // If element is present at mid, return True
//         if (sortedNums[mid] === searchNum){
//             for (var i = sortedNums[start]; i <= sortedNums[end]; i++) {
//                 if (sortedNums[i] === searchNum) {
//                     count++
//                 }
//             }
//             return count;
//         else if (sortedNums[mid] < searchNum)
//         start = mid + 1;
//         else
//         end = mid - 1;
//         }
//     return false;
// }

//  {
//     let start=0, end=arr.length-1;
//     // Iterate while start not meets end
//     while (start<=end){
//         // Find the mid index
//         let mid=Math.floor((start + end)/2);
//         // If element is present at mid, return True
//         if (arr[mid]===x) return true;
//         // Else look in left or right half accordingly
//         else if (arr[mid] < x)
//             start = mid + 1;
//         else
//             end = mid - 1;
//     }
//     return false;
// }



console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true (1 for bonus)
console.log(binarySearch(nums3, searchNum3)); // true (1 for bonus)
console.log(binarySearch(nums4, searchNum4));

// bonus, how many times does the search num appear?
// console.log(binarySearch(nums4, searchNum4)); // 4