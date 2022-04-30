function solution(arr) {
  var answer = [0, 0];
  const stack = [arr];

  while(stack.length > 0) {
    let sum = 0;
    const target = stack.pop();
    const length = target.length;

    for(let i=0; i<length; i++) {
      for(let j=0; j<length; j++) {
        sum += target[i][j];
      }
    }

    if(sum === 0) {
      answer[0]++;
    } else if(sum === length * length) {
      answer[1]++;;
    } else {
      let leftTop = [];
      for(let i=0; i<length/2; i++) {
        const row = [];
        for(let j=0; j<length/2; j++) {
          row.push(target[i][j]);
        }
        leftTop.push(row);
      }
      stack.push(leftTop);

      let rightTop = [];
      for(let i=0; i<length/2; i++) {
        const row = [];
        for(let j=length/2; j<length; j++) {
          row.push(target[i][j]);
        }
        rightTop.push(row);
      }
      stack.push(rightTop);

      let leftBottom = [];
      for(let i=length/2; i<length; i++) {
        const row = [];
        for(let j=0; j<length/2; j++) {
          row.push(target[i][j]);
        }
        leftBottom.push(row);
      }
      stack.push(leftBottom);

      let rightBottom = [];
      for(let i=length/2; i<length; i++) {
        const row = [];
        for(let j=length/2; j<length; j++) {
          row.push(target[i][j]);
        }
        rightBottom.push(row);
      }
      stack.push(rightBottom);
    }
  }

  return answer;
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]));