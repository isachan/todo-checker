#TODO CHECKER
An attempt at a technical assessment for Govtech.

##Problem Statement
It's common to see `TODOs` in code. It's also common for `TODOs` to remain as to-dos for a long time. One way we can solve this problem is to have a service that runs through all files in a given directory and checks for any instances of the key-phrase `"TODO"`, flagging each one of them out for humans to continue working on them.

##Getting Started
This application takes in a user-specified directory and outputs a list of files that contains `TODO` that is in the directory and its sub-directories as well via a recursion function.
User can also specify other keywords (other than `TODO`) to search/flag out the respective files as well.

##Usage

###Prerequisite
This is written in JS (Node). As such, node needs to be installed.
Use the package manager npm to install node.

`npm install node`

###Running the application

Simply run `node checkFilesWithKeyword.js testDirectory`
You may specify `testDirectory` with other directories in mind as well.

###Testing

In `testDirectory`, there are a few test cases.
Test cases ending with odd numbers are negative test cases, and those ending with even numbers are positive test cases.

An example of a positive test case would be

`// TO DO`

An example of a negative test case would be

`let TODO = 'stuff'`
`let TODO2 = 'TO DO'`
`//TODOOOOOOO`
`//TO DO`

##CONSIDERATIONS

For this assignment, I have only considered files that are written in JS. Files written in other languages (eg. Python/Ruby etc) are not considered within this scope.

For the Regex expressions, it may not cover all base case, but I've given as much thought as possible. They are basically:

- TODO as variable (assignment/property access)
- TODO as string
- any non-whole words of TODO itself (eg. TODOOOOO or TO DO)
