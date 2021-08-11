Technical Interview - String Calculator
=======================================

# Author Luisa Escalona <escalona.luisa@gmail.com>

I developed a solution with VueJS and JavaScript in a Node project. To do the testing I used the Jest Testing Framework. 

In my solution, I covered all the 4 points of the task and the points 1 and 2 of the bonus.

To run it, just open the index.html file in a web browser and enter the string with the separated numbers in the text box.

To run the test file, open this folder from your terminal and run the command `npm run test` (you need node - npm installed).

These are the tests included in the file:
  ✓ Add(1,2,5) - Expected: 8 (11 ms)
  ✓ Add(1\n,2,3) - Expected: 6 (1 ms)
  ✓ Add(1,\n2,4) - Expected: 7 (1 ms)
  ✓ Add(//;\n1;3;4) - Expected: 8 (1 ms)
  ✓ Add(//;\n1;-3;2) - Expected to throw: Negatives not allowed: -3 (19 ms)
  ✓ Add(//$\n1$2$3) - Expected: 6
  ✓ Add(//@\n2@3@8) - Expected: 13
  ✓ Add(//$$$$$\n1$$$$$2$$$$$9) - Expected: 12
  ✓ Add(1,1001,2,9850) - Expected: 3
  ✓ Add(2,1001) - Expected: 2 (1 ms)
  ✓ Add(//***\n1***2***3) - Expected: 6 (1 ms)
  ✓ Add(//@\n2@-3@8@-1) - Expected to throw: Negatives not allowed: -3,-1 (1 ms)
  ✓ Add(1009,1001,2002,9850) - Expected: 0 (1 ms)
  ✓ Add(//$\n5$5$,6) - Expected to throw: Invalid number: ,6 (1 ms)
  ✓ Add([empty string]) - Expected: 0 (1 ms)
  ✓ Add([blank space]) - Expected: 0

# Some recent code

To check some recent code I developed, please open the codingExample.js file with any text/code editor.

If you have any question or comment, please send me a message to escalona.luisa@gmail.com