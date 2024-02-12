function movingZerosToTheEnd(inputArr) {
  let resultArr = [];
  if (!inputArr.includes(0)) {
    return inputArr;
  }

  let zerosCount = 0;
  for (let element of inputArr) {
    console.log('element: ', element);
    console.log('element != 0: ', element != 0);
    if (element != 0 || element === false) {
      resultArr.push(element);
    } else {
      zerosCount++;
    }
  }
  console.log('zerosCount: ', zerosCount);
  console.log('resultArr: ', resultArr);
  if (zerosCount > 0) {
    for (let j = 0; j < zerosCount; j++) {
      resultArr.push(0);
    }
  }
  console.log('resultArr2: ', resultArr);
  return resultArr;
}

module.exports = movingZerosToTheEnd;
