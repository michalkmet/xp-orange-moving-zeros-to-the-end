const movingZerosToTheEnd = require('./movingZerosToTheEnd');

describe('User Story 1: Empty or 1 element in arr', () => {
  it('UAT1.1 When I pass [0] I should see [0]', () => {
    expect(movingZerosToTheEnd([0])).toStrictEqual([0]);
  });
  it('UAT1.2 When I pass [] I should see []', () => {
    expect(movingZerosToTheEnd([])).toStrictEqual([]);
  });
});
