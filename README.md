# Week 3/Mr. Roboger's
##### HTML, CSS, Javascript, and jQuery - looping/array comprehension 10/30/20
### By Harrison Strand
## Description
---This project was designed to display my comprehension from the material in week three of Epicodus and show results on the website based on the user's input of choices with certain values in the output replaced with certain strings. This project uses HTML and CSS and Javascript with the following techniques:

---looping to create arrays and values
---jQuery to show and hide results from user input answers.
---Branching to give results of choices gathered by the user
---Forms to gather input


## Setup
#### View Online
* visit: 
#### Open Locally
1. Navigate to https://github.com/HarrisonStrand/robogers.git 
2. Click on the green 'Code' button and copy the repository HTTPS URL
3. (a) Open your machine terminal and type in the command 'git clone 
https://github.com/HarrisonStrand/robogers.git' in the directory you would like to clone the repository.
(b) Alternatively, click 'Download Zip' and open the file on your machine
4. Open the index.html file to view the website, or use an IDE to view the code language.

#### Known Bugs
- Could not yet get value to word replacement to function
- User cannot yet clear entry to enter in new number

#### Contact me at: _[harrisonstrand@gmailcom](harrisonstrand@gmail.com)_

##Specs:

Test: "It will convert user's input from a string to a number."
Expect: (robogers("10")).toEqual(10);

Test: "It will alert a message if 0 is entered."
Expect: (robogers("0")).toEqual("Enter a number higher than 0!!!");

Test: "It will return a range of numbers from 0 to the user's input number."
Expect: (robogers("5")).toEqual(0, 1, 2, 3, 4, 5);

Test: "It will create a new array with a range of numbers based on user input."
Expect: (robogers("5")).toEqual([0, 1, 2, 3, 4, 5]);

Test: "It will convert any numbers containing a 1 in the results to be replaced with "Beep!"."
Expect: (robogers("5")).toEqual(0, "Beep", 2, 3, 4, 5);

Test: "It will convert any numbers containing a 2 in the results to be replaced with "Boop!"."
Expect: (robogers("5")).toEqual(0, 1, "Boop", 3, 4, 5);

Test: "It will convert any numbers containing a 3 in the results to be replaced with "Won't you be my neighbor?"."
Expect: (robogers("5")).toEqual(0, 1, 2, "Won't you be my neighbor?", 4, 5);

## Technologies Used
Visual Studio Code
Git/Github
HTML
CSS Stylsheet
Javascript Scripts

## Legal
Copyright 2020 Harrison Strand

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 