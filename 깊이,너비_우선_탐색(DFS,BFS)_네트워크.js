function solution(n, computers) {
  let result = [];
  
  for(let i=0; i<computers.length; i++) {
    const computer = computers[i].map((value, index) => value === 1 ? index + 1 : -1).filter(value => value !== -1);

    let isNext = false;
    for(let j=0; j<result.length; j++) {
      for(let k=0; k<computer.length; k++) {
        if(result[j].includes(computer[k])) {
          result[j].push(...computer);
          isNext = true;
          break;
        }
      }
      if(isNext) break;
    }
    if(!isNext) result.push(computer);
  }
  return result.length;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));

// 30점...