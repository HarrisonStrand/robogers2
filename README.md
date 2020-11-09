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
* visit: https://harrisonstrand.github.io/robogers2/
#### Open Locally
1. Navigate to https://github.com/HarrisonStrand/robogers2.git 
2. Click on the green 'Code' button and copy the repository HTTPS URL
3. (a) Open your machine terminal and type in the command 'git clone 
https://github.com/HarrisonStrand/robogers2.git' in the directory you would like to clone the repository.
(b) Alternatively, click 'Download Zip' and open the file on your machine
4. Open the index.html file to view the website, or use an IDE to view the code language.

#### Known Bugs

#### Contact me at: _[harrisonstrand@gmailcom](harrisonstrand@gmail.com)_

## Specs:

Description: beepBoop();

Test: "It will create a new list of numbers from 1 to the user's input of a number"
Expect: (5).toEqual (1, 2, 3, 4, 5,);

Test: "It will create a new string based on the previous array"
Expect: (1, 2, 3, 4, 5).toEqual ("12345");

Test: "It will split the new string based on index of the array"
Expect: ("12345").toEqual ("1" "2" "3" "4" "5");

Test: "It will replace each string that includes "3" with "WYBMN?"
Expect: ("1" "2" "3" "4" "5").toEqual ("1" "2" "WYBMN?" "4" "5");

Test: "It will replace each string that includes "2" with "Boop!"
Expect: ("1" "2" "3" "4" "5").toEqual ("1" "Boop!" "3" "4" "5");

Test: "It will replace each string that includes "1" with "Beep!"
Expect: ("1" "2" "3" "4" "5").toEqual ("Beep!" "2" "3" "4" "5");

Test: "It will return the new string with each "character" separated by a comma and space"
Expect: ("Beep!" "2" "3" "4" "5").toEqual (Beep!, Boop!, Won't you be my neighbor?, 4, 5,);

## Technologies Used
Visual Studio Code, 
Git/Github, 
HTML, 
CSS Stylsheet, 
Javascript, 

## Legal
Copyright 2020 Harrison Strand

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 