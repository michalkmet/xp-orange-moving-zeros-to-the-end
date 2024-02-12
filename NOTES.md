# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:

- ✅ DONE Initial refactor
- ✅ DONE Examples
- ✅ DONE User stories + uats

User Story 1: Empty or 1 element in arr
As a user, I want to see correct result for empty arr or arr with one element

- ✅ DONE UAT1.1 When I pass [0] I should see [0]
- ✅ DONE UAT1.2 When I pass [] I should see []
- ✅ DONE UAT1.3 When I pass [false] I should see [false]

User Story 2: Two elements in arr
As a user, I want to see correct result for array with 2 elements

- ✅ DONE UAT2.1 When I pass [1, 0] I should see [1, 0]
- ✅ DONE UAT2.2 When I pass [0, 1] I should see [1, 0]
- 🚧 IN PROGRESS UAT2.3 When I pass [0, "a"] I should see ["a", 0]

Pomodoro 2:

- ✅ DONE UAT2.3 When I pass [0, "a"] I should see ["a", 0]

User Story 3: Three and more elements
As a user, I want to see correct result for array with 3 or more elemets

- ✅ DONE UAT3.1 When I pass [0, 1, 2] I should see [1, 2, 0]
- ✅ DONE UAT3.2 When I pass [0, 1, 0, 2] I should see [1, 2, 0, 0]
- ✅ DONE UAT3.3 When I pass [0, 2, "a", false, 1] I should see [2, "a", false, 1, 0]
- ✅ DONE UAT3.4 When I pass [false,1,0,1,2,0,1,3,"a"] I should see [false,1,1,2,1,3,"a",0,0]
- ✅ DONE Refactor
- ✅ DONE edge cases examples
- ⚠ TODO sonarqube
