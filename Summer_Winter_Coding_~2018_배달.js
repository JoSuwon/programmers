function solution(N, road, K) {
  let costList = new Array(N + 1).fill(-1);
  costList[1] = 0;
  road = road.map(r => {
    if(r[1] < r[0]) return [r[1], r[0], r[2]];
    return r;
  });
  road.sort((a, b) => a[0] - b[0]);

  for(let i=0; i<road.length; i++) {
    const [left, right, cost] = road[i];

    if(costList[left] >= 0) {
      const goRightCost = costList[left] + cost;
      if(costList[right] === -1 ||(costList[right] !== -1 && costList[right] > goRightCost)) {
        costList[right] = goRightCost;
        i = -1;
      }
    }

    if(costList[right] >= 0) {
      const goLeftCost = costList[right] + cost;
      if(costList[left] === -1 ||(costList[left] !== -1 && costList[left] > goLeftCost)) {
        costList[left] = goLeftCost;
        i = -1;
      }
    }
  }

  return costList.filter(value => {
    return value >=0 && value <= K;
  }).length;
}

console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3))