function solution(lines) {
  const requestList = [];
  let max = 0;
  for(let i=0; i<lines.length; i++) {
      const [date, endTime, requestTime] = lines[i].split(' ');
      
      const endDate = new Date(date + ' ' + endTime).getTime();
      const startDate = new Date(endDate - (+(requestTime.slice(0, -1)) * 1000 -1)).getTime();
     
      requestList.push({
          start: startDate,
          end: endDate,
      });
  }
  
  requestList.sort((a, b) => a.end - b.end);
  
  console.log(requestList);
  
  for(let i=0; i<requestList.length; i++) {
      const checkStart = requestList[i].end - 1;
      const checkEnd = checkStart + 1000;
      
      console.log(checkStart, checkEnd);
      
      const filteredRequest = requestList.filter(req => {
          if(req.end <= checkStart) return false;
          else if(req.start <= checkStart && req.end <= checkEnd) return true;
          else if(req.start >= checkStart && req)
      });
      
      if(filteredRequest.length > max) {
          max = filteredRequest.length;
      }
  }
  
  return max;
}