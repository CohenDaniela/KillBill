# API Documentation

## Overview

This API provides functionality for managing characters, authentication, and serving static files. It is built using Node.js, Express, MySQL for the database, and includes token-based authentication using JWT.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Configuration of the required environment variables in a `.env` file at the root of your project.

Example `.env` file:

HOST=your_database_host
USER_DB=your_database_user
PASS=your_database_password
DATABASE=your_database_name
PORT=your_port_prefix


### Installation

1. Install dependencies:

   ```bash
   npm install

    npm start

 ## Endpoints

1. List Five Characters
Endpoint: GET /api/listFive
Description: Retrieves a list of characters from the death_list_five table.
2. Other Characters
Endpoint: GET /api/others

Description: Retrieves a list of other characters from the Other_Characters table.

Endpoint: POST /api/others

Description: Adds a new character to the Other_Characters table.

Requirements: Requires a JSON body with the character details.

Endpoint: PUT /api/others/:id

Description: Updates a character in the Other_Characters table.

Requirements: Requires a JSON body with the updated character details. :id in the URL represents the ID of the character to be updated.

Endpoint: DELETE /api/others/:id

Description: Deletes a character from the Other_Characters table.

Requirements: :id in the URL represents the ID of the character to be deleted.

3. User Authentication
Endpoint: POST /api/signup

Description: Registers a new user.

Requirements: Requires a JSON body with the user's name, email, and password.

Endpoint: POST /api/login

Description: Authenticates a user.

Requirements: Requires a JSON body with the user's email and password.

4. ## Static Files
Static files are served from the following paths:

./public-html
./public-css
./images
Token Authentication
Token authentication is implemented using JWT (JSON Web Tokens). The authenticateToken middleware is used to protect certain endpoints. Include the token in the Authorization header for authenticated requests.

Additional Notes
Make sure to customize the code according to your specific needs before deploying in a production environment.
Ensure secure handling of sensitive information, such as database credentials and secret keys.
Review and update the error handling mechanism based on your application requirements.
Feel free to adapt this documentation and codebase to meet your project's specifications.
