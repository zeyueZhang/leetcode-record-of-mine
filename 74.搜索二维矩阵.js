/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 自己想的
// var searchMatrix = function(matrix, target) {
//   let j = 0
//   const w = matrix[0].length,
//     h = matrix.length
//   let index = null
//   while(j < h) {
//     const item = matrix[j]
//     if(j === 0 && item[w - 1] >= target) {
//       index = j
//       break
//     }
//     if(matrix[j + 1]) {
//       if(item[w - 1] < target && matrix[j + 1][w - 1] >= target) {
//         index = j + 1
//         break
//       }
//     }
   
//     j++
//   }
//   if(typeof index === "number") {
//     const item = matrix[index]
//     for(let z = 0; z < item.length; z++) {
//       if(item[z] === target) {
//         return true
//       }
//     }
//   }
 
//   return false
// };

// 二分法
var searchMatrix = function(matrix, target) {
  const rowIndex = binarySearchFirstColumn(matrix, target);
  if (rowIndex < 0) {
      return false;
  }
  return binarySearchRow(matrix[rowIndex], target);
};

const binarySearchFirstColumn = (matrix, target) => {
  let low = -1, high = matrix.length - 1;
  while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      if (matrix[mid][0] <= target) {
          low = mid;
      } else {
          high = mid - 1;
      }
  }
  return low;
}

const binarySearchRow = (row, target) => {
  let low = 0, high = row.length - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (row[mid] == target) {
          return true;
      } else if (row[mid] > target) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return false;
}
// @lc code=end

