## Backlog

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## User Stories

User Story 1: Empty or 1 element in arr
As a user, I want to see correct result for empty arr or arr with one element

UAT1.1 When I pass [0] I should see [0]
UAT1.2 When I pass [] I should see []
UAT1.3 When I pass [false] I should see [false]

User Story 2: Two elements in arr
As a user, I want to see correct result for array with 2 elements

UAT2.1 When I pass [1, 0] I should see [1, 0]
UAT2.2 When I pass [0, 1] I should see [1, 0]
UAT2.3 When I pass [0, "a"] I should see ["a", 0]

User Story 3: Three and more elements
As a user, I want to see correct result for array with 3 or more elemets

UAT3.1 When I pass [0, 1, 2] I should see [1, 2, 0]
UAT3.2 When I pass [0, 1, 0, 2] I should see [1, 2, 0, 0]
UAT3.3 When I pass [0, 2, "a", false, 1] I should see [2, "a", false, 1, 0]
UAT3.4 When I pass [false,1,0,1,2,0,1,3,"a"] I should see [false,1,1,2,1,3,"a",0,0]

User Story 4: Edge cases
As a user, I want to see correct result for array with edge case elements

UAT4.1 When I pass ['a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9] I should see [ 'a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]
UAT4.2 When I pass [ 9, '1', 8, null, '9', '3', [], '4', [], false, 2, [], 5, '2', '8', '0', '2', {}, true, 3, '6', true, {}] I should see [ 9, '1', 8, null, '9', '3', [], '4', [], false, 2, [], 5, '2', '8', '0', '2', {}, true, 3, '6', true, {} ]
