# Sprint Challenge: Testing - TDD Video Games

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Testing. During this Sprint, you studied Introduction to Automated Testing, Testing React Applications & Testing Web APIs. In your challenge this week, you will demonstrate proficiency by creating an application that follows the TDD pattern to create a simple Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Testing and your command of the concepts and techniques in the Introduction to Automated Testing, Testing React Applications & Testing Web APIs modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

  The “describe( )” global function in Jest is used to encapsulate test suites, or collections of tests. This is useful during TDD because it creates a visual hierarchy for you when you execute Jest with the “—verbose” flag on your “start” script in the package.json file. On the other hand, the “it( )” global function in Jest is most often a nested inside of the “describe ( )” global function because instead of acting as a container for test suites, this global function acts as a container for unit tests. When you have a large code base, it is very beneficial to use BOTH of these global functions during TDD because they will help provide easy-to-read structure and organization to improve maintainability of your code.


2. What is the point of `Test Driven Development`? What do you think about this approach?

  The main focus of the “Test Driven Development” process is to increase your “test-coverage” or the percentage of your code that is tested automatically. The higher this percentage, the less chances that you’ll have bugs in your code. Despite having learned how to write code before learning how to write tests, I can really appreciate the approach of TDD because it is “proactive” versus “reactive”. How we approach our physical health can be a great analogy to explain why a ‘proactive’ approach is better than a ‘reactive’ approach. For instance, if you spend your whole life chasing money and ignoring your health, you may be wildly successful, but the ‘principle of allocation’ will eventually come ‘full circle’ for you. This biological principle is the idea that time spent doing one activity (i.e. - working long hours to become extremely successful at something) is equal to time NOT spent doing another activity (i.e. - eating well, sleeping adequately, exercising on a daily-basis, etc.) because you cannot be in two places at once. Therefore, when trading ‘health’ for ‘success’, you may initially feel inconvenienced to go to a doctor’s appointment because you ‘could have been working’ instead, but when the doctor diagnoses you with a stress-related illness of unknown causes, it’s at that moment that you “wished” you would have been more “proactive” in your approach towards your health. The same goes for programming. When you’re spending countless hours trying to debug a code base with thousands of lines of code because of angry customers complaining about frequent failure of your app, you’ll also have “wished” you had taken a TDD approach. That extra hour or two spent writing tests to prevent future countless hours debugging code is well worth the investment.


3. Mention three types of automated tests.

  There are many types of automated tests used for TDD/BDD, but some types of automated tests that we have covered so far include: ‘unit tests’ (which test a single “unit” of code, i.e. - a single function), ‘component tests’ (which test individual components for component-based frameworks, i.e. - React, Angular, etc.), and ‘snapshot tests’ (which test a current output of a component against a prior output of that same component).



## Project Set Up

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you downloaded the repository.
- [ ] run `yarn` or `npm i` to download all dependencies.
- [ ] type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] use `jest` and `supertest` to write the tests.
- [ ] Write the **tests BEFORE** writing the route handlers.
- [ ] Your API must be have `POST` and `GET` endpoints for `/games`.
- [ ] Write a **minimum** of three tests per endpoint.

Below is a product specification covering the requirements for your endpoints.

### POST /games

- [ ] The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

- [ ] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
- [ ] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

### GET /games

- [ ] The `GET /games` endpoint should return the list of games and HTTP status code 200.
- [ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problems

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exists return a 404 status code. Write tests for this endpoint.

**Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!**
