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
  it('UAT2.3 When I pass [0, "a"] I should see ["a", 0]', () => {
    expect(movingZerosToTheEnd([0, 'a'])).toStrictEqual(['a', 0]);
  });
});

describe('User Story 3: Three and more elements', () => {
  it('UAT3.1 When I pass [0, 1, 2] I should see [1, 2, 0]', () => {
    expect(movingZerosToTheEnd([0, 1, 2])).toStrictEqual([1, 2, 0]);
  });
  it('UAT3.2 When I pass [0, 1, 0, 2] I should see [1, 2, 0, 0]', () => {
    expect(movingZerosToTheEnd([0, 1, 0, 2])).toStrictEqual([1, 2, 0, 0]);
  });
  it('UAT3.3 When I pass [0, 2, "a", false, 1] I should see [2, "a", false, 1, 0]', () => {
    expect(movingZerosToTheEnd([0, 2, 'a', false, 1])).toStrictEqual([2, 'a', false, 1, 0]);
  });
  it('UAT3.4 When I pass [false,1,0,1,2,0,1,3,"a"] I should see [false,1,1,2,1,3,"a",0,0]', () => {
    expect(movingZerosToTheEnd([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toStrictEqual([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
  });
});

describe('User Story 4: Edge cases', () => {
  it("UAT4.1 When I pass ['a', 0,   0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9] I should see [ 'a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]", () => {
    expect(movingZerosToTheEnd(['a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9])).toStrictEqual([
      'a',
      'b',
      null,
      'c',
      'd',
      1,
      false,
      1,
      3,
      [],
      1,
      9,
      {},
      9,
      +0,
      +0,
      +0,
      +0,
      +0,
      +0,
      +0,
      +0,
      +0,
      +0,
    ]);
  });
  it("UAT4.2 When I pass [ 9, '1', 8, null, '9', '3', [], '4', [], false, 2, [], 5, '2', '8', '0', '2', {}, true, 3, '6', true, {}] I should see [ 9, '1', 8, null, '9', '3', [], '4', [], false, 2, [], 5, '2', '8', '0', '2', {}, true, 3, '6', true, {} ]", () => {
    expect(movingZerosToTheEnd([9, '1', 8, null, '9', '3', [], '4', [], false, 2, [], 5, '2', '8', '0', '2', {}, true, 3, '6', true, {}])).toStrictEqual([
      9,
      '1',
      8,
      null,
      '9',
      '3',
      [],
      '4',
      [],
      false,
      2,
      [],
      5,
      '2',
      '8',
      '0',
      '2',
      {},
      true,
      3,
      '6',
      true,
      {},
    ]);
  });
});
