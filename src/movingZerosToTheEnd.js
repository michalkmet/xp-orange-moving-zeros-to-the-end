function movingZerosToTheEnd(inputArr) {
  let resultArr = [];
  let zerosCount = 0;
  for (let element of inputArr) {
    console.log('element: ', element);
    console.log('element != 0 || element === false: ', element != 0 || element === false);
    if (element != 0 || element === false || Array.isArray(element)) {
      resultArr.push(element);
    } else {
      zerosCount++;
    }
  }
  console.log('resultArr: ', resultArr);
  return addZeros(zerosCount, resultArr);
}

function addZeros(zerosCount, resultArr) {
  if (zerosCount > 0) {
    for (let j = 0; j < zerosCount; j++) {
      resultArr.push(0);
    }
  }
  return resultArr;
}

module.exports = movingZerosToTheEnd;
