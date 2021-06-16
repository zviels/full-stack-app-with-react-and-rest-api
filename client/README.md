# Full Stack App With React & REST API

A full stack project I built for my portfolio during my studies at [Treehouse](https://teamtreehouse.com). In this final project, I first created a REST API using **Express**. This API provides a way to administer a school database containing information about users and courses. Users can interact with the database to create new courses, retrieve information on existing courses, and update or delete courses. In addition, the project requires users to create an account and sign it to make changes to the database. 

To create the back end of the project, I've used my knowledge of **NodeJS**, **Express**, **REST APIs** and **Sequelize**. I've also tested my work with [Postman](https://www.postman.com), a popular application for exploring and testing REST APIs.

After creating the API, I've used **React**, **JSX**, **React Router**, **React Context API** and **Create React App** to form a client for my existing school database REST API.

After Using the **Create React App** tool to set up my initial React app, I've -

- Used **JavaScript** and **JSX** to build out the components for my application in a modular fashion.
- Used **React Router** to set up my routes.
- Used **Axios** to fetch data from my REST API.
- Allowed users to sign up, and used basic authentication to support users signing in.
- Added CSS to personalize the project.

## Table of Contents

- [Preview](https://github.com/zviels/full-stack-app-with-react-and-rest-api#preview)
- [Quick Start](https://github.com/zviels/full-stack-app-with-react-and-rest-api#quick-start)
- [Overview](https://github.com/zviels/full-stack-app-with-react-and-rest-api#overview)
- [Built With](https://github.com/zviels/full-stack-app-with-react-and-rest-api#built-with)
- [Thanks](https://github.com/zviels/full-stack-app-with-react-and-rest-api#thanks)

## Preview

<a href="https://react-courses-app.netlify.app/">
  <img src="https://deab9i1yeabp0.cloudfront.net/github/treehouse/full-stack-app/full-stack-app.gif" alt="App Preview" width="100%">
</a>

## Quick Start

The easiest way to view the app is by clicking [here](https://react-courses-app.netlify.app/).

**Note:** To deploy the back end of the project (i.e the Express app) to Heroku I had to convert the database from SQLite to PostgreSQL. If I had not done so, the entire SQLite database would have been deleted at least once every 24 hours. You can read more about this issue [here](https://devcenter.heroku.com/articles/sqlite3). You can explore the API online by clicking [here](https://courses-rest-api.herokuapp.com/). To deploy the front end of the project (i.e the React app) I've used [Netlify](https://netlify.com).

If you wish to run this app locally on your machine, you'll have to - 

- [Download the ZIP file](https://github.com/zviels/full-stack-app-with-react-and-rest-api/archive/refs/heads/main.zip), extract it and open the project folder in your favorite code editor.
- Open the terminal and run the commands `cd api`, `npm i`, `npm run seed` and `npm start`. These commands will start the Express server and initialize the database. 
- Open a new, different terminal in your code editor. Then run the commands `cd client`, `npm i` and `npm start`. These commands will start the React development server.
- Leave your code editor open and visit `localhost:3000` in your browser.

## Overview

As mentioned above, I developed this app as part of my studies at [Treehouse](https://teamtreehouse.com). I participated in their [Techdegree](https://teamtreehouse.com/techdegree) program. In this section you can read about -

- The topics I learned before I started developing the app.
- The requirements I had to meet to complete this project.
- The rating the project received.

### What Did I Learn?

Here is what I learned before I started working on the project -

- Introduction to REST APIs <img src="https://img.shields.io/badge/-Dev%20Tools%20Course-9b3b5a" alt="Dev Tools Course">
- REST APIs with Express <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- Data Relationships with SQL and Sequelize <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- REST API Validation with Express <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- GitHub Basics <img src="https://img.shields.io/badge/-Dev%20Tools%20Course-9b3b5a" alt="Dev Tools Course">
- React Authentication <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">

I've also learned - 

- What **closures** are in JavaScript.
- How to **validate models** in Sequelize.
- How to use **Basic Authentication** to implement user authentication within an Express REST API application.
- **What Agile software development is,** and how to apply it using **the Scrum methodology.**
- Common **algorithms** and **data structures**.
- How to use **React Hooks.**

### Project Requirements

This app is actually the product of **two** Techdegree projects, not just one.

To see the project requirements for building the REST API, click [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/rest-api/project-requirements.jpg).

You can also view the project requirements for creating the client side of the app [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/full-stack-app/project-requirements.jpg).

### Rating

There are two possible grades for each Techdegree project - "Meets Expectations" and "Exceeds Expectations".

Both projects received the **"Exceeds Expectations"** rating.

See the full **back end** project review [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/rest-api/project-review.jpg).
See the full **front end** project review [here](https://deab9i1yeabp0.cloudfront.net/github/treehouse/full-stack-app/project-review.jpg).

:100:

## Built With

- CSS
- React
- NodeJS
- Express
- SQLite
- Sequelize

## Thanks

<a href="https://teamtreehouse.com">
  <img src="https://deab9i1yeabp0.cloudfront.net/github/treehouse/treehouse-logo.png" alt="Treehouse Logo" width="100%">
</a>

Thanks to [Treehouse](https://teamtreehouse.com) for providing the starter CSS file for this project (`global.css`).

**Note:** In this project I built all the pages from scratch, based on the mock up files I received.

In addition, a huge thank you to everyone who reviewed the project! :grinning: