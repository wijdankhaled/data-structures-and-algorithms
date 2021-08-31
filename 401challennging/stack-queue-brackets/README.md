# Challenge Summary
<!-- Description of the challenge -->
Write a function called validate brackets

Arguments: string
Return: boolean
representing whether or not the brackets in the string are balanced
There are 3 types of brackets:

- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

**Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp**

```
Input: exp = “[()]{}{[()()]()}” 
Output: true

Input: exp = “[(])” 
Output: false

```

## Whiteboard Process
<!-- Embedded whiteboard image -->
![](./code13.png)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
 
1. Declare a character stack S.
2. Now traverse the expression string exp. 
3. If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
4. If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else brackets are not balanced.
5. After complete traversal, if there is some starting bracket left in stack then “not balanced”

**Time Complexity:**

- Push operation : O(1).

- Pop operation : O(N).

- Auxiliary Space: O(N).
