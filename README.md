# Github Topic Explorer Readme by Aziz Ali

Thank you for the opportunity for the React and GraphQL position. I enjoyed performing this test.

Below you will find some topics that you will find helpful in reviewing the code.


## How to install and run the app

1. Download the code repo from the zip file provided
2. Run `npm install` or `yarn install` to install all project dependencies
3. Run `npm start` or `yarn start` to run the project
4. Go to http://localhost:300/ and enjoy the app :-)


## Notes



### Project Setup

- I chose not to use `create-react-app` intentionally so I could demo my ability to code a project from scratch.
- I have setup an `express.js` backend in this project for the primary purpose of protecting the `Github API Token`.
-  Although `create-react-app` has the option to pickup `.env` variables, those are still leaked in the front-end while making calls


### Libraries used

- `react` and `react-dom` for UI interface
- `graphql` `graphql-request`for making GraphQL calls to Github server from backend
- `express` to create an API layer that would make the Github calls along with the secret `API Token`
- `react-router-dom`for front-end route management



### Code Organizaion

There are two popular patterns of code organization. File organization by `type`, or file organization by `Feature`. I have chosen the later.

I have **C**apitalized all component folder and in them you will find an `index.jsx` file. This is the component file.

The reason for this convension is that if we choose to add styles and redux actions, it would be helpful to organize all Feature related file in that folder.

I have also indentionally chosen to name the React files with the extension of `.jsx` to indicate that `JSX` is in those files.

This helps distinguish pure JS files such as `utils`, `express routes` and  ` constant` files from UI files more distictly. This also helps the code editor format files differenty by file type.



### Opportunity of improvement

1. Use of `apollo client` on React side for management of GraphQL query

2. Introduce `Babel` config for control over the compatability rules

3. Introduce `ESlint` as part of the build process for consistent code standards

4. With Babel JS introduced enable promise transformation for `async await` and refactor promise `.then`

5. Introduce `redux` if the application becomes more complex

6. Improve loading behavior to use `react suspense`




# Github Topic Explorer Readme by Aziz

Thank you for the opportunity for the React and GraphQL position. I enjoyed performing this test.

Below you will find some topics that you will find helpful

## How to install and run the app
1. Download the code repo from github or zip file provided
2. Run `npm install` or `yarn install` to install all project dependencies
3. Run `npm start` to run the project

## Notes

### Project Setup
- I chose not to use `create-react-app` intentionally so I could demo my ability to code a project from scratch
- I have setup an express.js backend in this project whose primary purpose is to protect the Github API Token.
- Although `create-react-app` has the option to picup `.env` variables, those are still leaked in the front-end while making calls
- I 
### Code Organizaion
There are two popular patterns of code organization. File organization by type or File organization by Feature. I have chosen the later.

I have Capitalized all component folder and in them you will find an index.jsx file. This is the component file.
The reason for this convension is that if we choose to add styles and redux actions, it would be helpful to organize all Feature related file in that folder
### Unit Test
I have not written any unit tests for the interest of time
### Opportunity of improvement
1. Use of apolo client on React for management of GraphQL query
2. Introduce Babel config for control over the compatability rules
3. Introduct ESlint as part of the build process for consistent code standards
4. With Babel JS introduced enable promise transformation for `async await` and refactor promise `.then`
5. Introduce redux if the application becomes more complex
6. Improve loading behavior to use `react suspense`
7. Add 
# GitHub Topic Explorer

----
## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have
  * a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
  * You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

* Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

### How to run app & test

* Leave instruction on how to run and test your app here


### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:

* Refactoring:

* Additional Features:
