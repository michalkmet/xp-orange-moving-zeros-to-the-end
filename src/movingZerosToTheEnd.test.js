const movingZerosToTheEnd = require('./movingZerosToTheEnd');

describe('User Story 1: Empty or 1 element in arr', () => {
  it('UAT1.1 When I pass [0] I should see [0]', () => {
    expect(movingZerosToTheEnd([0])).toStrictEqual([0]);
  });
  it('UAT1.2 When I pass [] I should see []', () => {
    expect(movingZerosToTheEnd([])).toStrictEqual([]);
  });
  it('UAT1.3 When I pass [false] I should see [false]', () => {
    expect(movingZerosToTheEnd([false])).toStrictEqual([false]);
  });
});

describe('User Story 2: Two elements in arr', () => {
  it('UAT2.1 When I pass [1, 0] I should see [1, 0]', () => {
    expect(movingZerosToTheEnd([1, 0])).toStrictEqual([1, 0]);
  });
  it('UAT2.2 When I pass [0, 1] I should see [1, 0]', () => {
    expect(movingZerosToTheEnd([0, 1])).toStrictEqual([1, 0]);
  });
});
