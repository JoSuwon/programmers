function solution(maps) {
  let stack = [[0, 0]];
  const WIDTH = maps[0].length;
  const HEIGHT = maps.length;

  let count = 0;

  while(stack.length > 0) {
    count++;
    // const [curY, curX] = stack.pop(); 
    const [curY, curX] = stack.shift(); 
    // 스택으로는 통과 실패
    // 무슨차이가 있을까... 같이 퍼지니깐 교점이 만나는게 조금 더 빠름
    // 예제 기준으로 18/16, 16/14 2회씩 차이가 존재하넴

    if(curY - 1 >= 0 && curY+curX-1 !== 0) { // 현재위치 위쪽 탐색
      const curCost = maps[curY][curX];
      if(maps[curY-1][curX] === 1 || (maps[curY-1][curX] !== 0 && curCost + 1 < maps[curY-1][curX])) {
        maps[curY-1][curX] = curCost + 1;
        stack.push([curY-1, curX]);
      }
    }

    if(curY + 1 <= HEIGHT - 1) { // 현재위치 아래쪽 탐색
      const curCost = maps[curY][curX];
      if(maps[curY+1][curX] === 1 || (maps[curY+1][curX] !== 0 && curCost + 1 < maps[curY+1][curX])) {
        maps[curY+1][curX] = curCost + 1;
        stack.push([curY+1, curX]);
      }
    }

    if(curX - 1 >= 0 && curY+curX-1 !== 0) { // 현재위치 왼쪽 탐색
      const curCost = maps[curY][curX];
      if(maps[curY][curX-1] === 1 || (maps[curY][curX-1] !== 0 && curCost + 1 < maps[curY][curX-1])) {
        maps[curY][curX-1] = curCost + 1;
        stack.push([curY, curX-1]);
      }
    }

    if(curX + 1 <= WIDTH - 1) { // 현재위치 오른쪽 탐색
      const curCost = maps[curY][curX];
      if(maps[curY][curX+1] === 1 || (maps[curY][curX+1] !== 0 && curCost + 1 < maps[curY][curX+1])) {
        maps[curY][curX+1] = curCost + 1;
        stack.push([curY, curX+1]);
      }
    }
  }

  console.log('탐색회수 : ', count);

  if(maps[HEIGHT-1][WIDTH-1] === 1) return -1;
  else return maps[HEIGHT-1][WIDTH-1];
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));