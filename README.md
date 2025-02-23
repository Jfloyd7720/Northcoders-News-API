Northcoders News API

Northcoders News API is a backend service that allows users to interact with articles, comments and topics. This API is part of a full-stack project where users can post articles, comment on them and vote on them. The backend is built using Node.js and PostgreSQL for database management.

🔗 View Live Project

You can view the live version of the API here:
https://northcoders-news-api-4aqk.onrender.com/

📦 Technologies Used

Node.js: Backend runtime environment for executing JavaScript.
Express.js: Web framework for building APIs.
PostgreSQL: Relational database used for storing articles, comments and topics.

💡 About the Project

Northcoders News API provides the following functionality:

Topics: View a list of available topics.
Articles: Fetch, filter, sort, and update articles.
Comments: Add, update, and delete comments for articles.
Users: View a list of users.

This API enables users to interact with the data on the frontend through routes and controllers designed for various operations, including adding new content, voting on articles, and managing comments.

⚙️ Setup Instructions

Node.js version 14 or higher.
PostgreSQL version 12.0 or higher.
Ensure that PostgreSQL is installed on your machine and that you have the necessary permissions to create databases.

Step-by-Step Guide to Run the Project Locally

Clone the Repository
Clone the project repository to your local machine:
git clone https://github.com/Jfloyd7720/Northcoders-News-API.git

Install Dependencies
Navigate to the project folder and install the required dependencies:
yarn install or npm install

Create .env Files
Create a .env file for development and add the following variable:
PGDATABASE=nc_news

Create a .env file for testing and add the following variable:
PGDATABASE=nc_news_test

Create Databases
Run the following command to create the required databases:
yarn run setup-dbs or npm run setup-dbs

Seed the Database
Seed the database with initial data using:
yarn run seed or npm run seed
Run the Application

Now, start the application:
yarn run start or npm run start
The API will be accessible at http://localhost:3000.

Run Tests

To run the tests for the application:
yarn run test or npm run test

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
