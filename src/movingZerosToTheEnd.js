function movingZerosToTheEnd(inputArr) {
  let resultArr = [];
  let zerosCount = 0;
  for (let element of inputArr) {
    if (isNotZero(element)) {
      resultArr.push(element);
    } else {
      zerosCount++;
    }
  }
  return addZeros(zerosCount, resultArr);
}

function isNotZero(element) {
  return element !== 0 || element === false || Array.isArray(element);
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
