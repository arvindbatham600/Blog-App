# DailyBlog [Live Demo](https://arvind-dailyblog.netlify.app/)

![Logo](https://arvind-dailyblog.netlify.app/assets/logo1-CCbFLb4G.jpeg)

DailyBlog is a full-stack blog application built with the MERN stack (MongoDB, Express, React, Node.js). Users can create, read, update, and delete blog posts, as well as manage their accounts. The project is open source and welcomes contributions from the community.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Environment Variables](#environment-variables)
  - [Uncomment the localhost server](#uncomment-the-localhost-server)
- [Learnings](#learnings)
- [Contributing](#contributing)
  - [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
- [Author](#author)

## Tech Stack

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for JavaScript apps.
- **Sass:** A CSS preprocessor for easier and more efficient styling.
- **Material UI:** A popular React UI framework for creating responsive and visually appealing components.

### Backend

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express:** A minimal and flexible Node.js web application framework.

### Libraries Used for Authentication and Validation

- **Zod:** A TypeScript-first schema declaration and validation library.
- **bcrypt:** A library to help you hash passwords.
- **jsonwebtoken:** A library to work with JSON Web Tokens (JWT).
- **dotenv:** A module to load environment variables from a `.env` file.

### Database
- Mongodb

## Installation

To get a local copy up and running, follow these simple steps.

### Clone the Repository

```bash
git clone git@github.com:arvindbatham600/Blog-App.git
```

## Frontend Setup

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Backend Setup

Go to the client directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend.

`MONGODB_URL`

`PORT`

`JWT_SECRET`

## Uncomment the localhost server

in api.js file uncomment the localhost server and comment the frontend url for running locally

# Learnings

From this project, I've gained valuable experience in:

- Full-stack development using the MERN stack
- Implementing authentication and authorization using JWT
- State management with Redux
- Responsive UI design with Material UI and Sass
- API development with Node.js and Express
- Input validation using Zod
- Secure password hashing with bcrypt

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Reporting Issues

If you encounter any issues or have suggestions for improvements, feel free to create an issue in the Issues section of the repository.

## Author

- GitHub: [@arvindbatham600](https://www.github.com/arvindbatham600)
