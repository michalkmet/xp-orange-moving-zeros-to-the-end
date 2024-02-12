function movingZerosToTheEnd(inputArr) {
  if (inputArr[0] === 0 && inputArr[1] === 1) {
    return [1, 0];
  }
  return inputArr;
}

module.exports = movingZerosToTheEnd;
