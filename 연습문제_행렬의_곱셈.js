function solution(arr1, arr2) {
  const answer = [];
  
  for(let i=0; i<arr1.length; i++) {
      const row = [];
      for(let j=0; j<arr2[0].length; j++) {
          const left = arr1[i];
          const right = arr2.reduce((a, c) => {
            return [...a, c[j]];
          }, []);

          const sum = left.reduce((a, c, index) => {
            return a + c * right[index];
          }, 0);
          row.push(sum);
      }
      answer.push(row);
  }
  
  return answer;
}

// console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));