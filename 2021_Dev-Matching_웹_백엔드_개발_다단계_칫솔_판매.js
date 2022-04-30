function solution(enroll, referral, seller, amount) {
  var answer = new Array(enroll.length).fill(0);
  
  for(let i=0; i<seller.length; i++) {
      let crew = seller[i];
      let money = amount[i] * 100;
      
      let hasBoss = true;
      while(hasBoss) {
          const findedIndex = enroll.findIndex(name => name === crew);
          answer[findedIndex] += Math.ceil(money * 0.9);
          if(referral[findedIndex] === '-') hasBoss = false;
          else {
              crew = referral[findedIndex];
              money = Math.floor(money * 0.1);
              if(money === 0) hasBoss = false;
          }
      }
  }
  return answer;
}

// 11,12,13 시간초과
// 분배금이 없을때 더 이상 레퍼럴대상을 찾지 않는것으로 해결.