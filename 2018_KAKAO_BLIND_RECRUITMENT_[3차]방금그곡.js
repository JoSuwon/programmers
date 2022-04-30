function solution(m, musicinfos) {
  const matchMelody = convertCode(m);
  let maxPlayTimes = 0;
  let result = '';
  for (let i = 0; i<musicinfos.length; i++) {
    const [start, end, name, code] = musicinfos[i].split(',');
    const convertedCode = convertCode(code);
    const playTimes = getTimes(start, end);
    let palyedMelody = '';
    for(let j=0; j<playTimes; j++) {
      palyedMelody += convertedCode[j % convertedCode.length];
    }

    if(palyedMelody.includes(matchMelody)) {
      if(maxPlayTimes < playTimes) {
        result = name;
        maxPlayTimes = playTimes;
      }
    }
  }

  if(maxPlayTimes === 0) return '(None)';
  else return result;
}

function convertCode(code) {
  code = code.replace(/A#/g, "H");
  code = code.replace(/B#/g, "I");
  code = code.replace(/C#/g, "J");
  code = code.replace(/D#/g, "K");
  code = code.replace(/E#/g, "L");
  code = code.replace(/F#/g, "M");
  code = code.replace(/G#/g, "N");
  return code;
}

function getTimes(start, end) {
  const [startHours, startMinutes] = start.split(':');
  const [endHours, endMinutes] = end.split(':');
  const endTimes = +endHours * 60 + +endMinutes;
  const startTimes = +startHours * 60 + +startMinutes;

  return endTimes - startTimes;
}

// console.log(
//   solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
// );
console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
);
// console.log(
//   solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
// );
