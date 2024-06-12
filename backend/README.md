# DailyBlog Backend

![Logo](https://arvind-dailyblog.netlify.app/assets/logo1-CCbFLb4G.jpeg)

This is the backend server for the DailyBlog application, providing RESTful APIs for managing blog posts and user authentication.

## Tech Stack

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express:** A minimal and flexible Node.js web application framework.

## Libraries Used for Authentication and Validation

- **Zod:** A TypeScript-first schema declaration and validation library.
- **bcrypt:** A library to help you hash passwords.
- **jsonwebtoken:** A library to work with JSON Web Tokens (JWT).
- **dotenv:** A module to load environment variables from a `.env` file.

### Database
- Mongodb


## Features

- User Authentication (Register, Login)
- Secure password hashing with bcrypt
- JWT-based authentication for protected routes
- CRUD operations for blog posts
- Input validation using Zod

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have npm and Node.js installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone git@github.com:arvindbatham600/Blog-App.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd backend
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    node server.js
    ```

## Author

- GitHub: [@arvindbatham600](https://www.github.com/arvindbatham600)
