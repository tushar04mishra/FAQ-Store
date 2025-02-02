# FAQ Management System

This repository contains two main folders: `faq-management` and `frontend`. Below is a brief description of each folder and its contents.

## Folder Structure

```
faq-management
├── config
│   ├── config.json
│   └── serverconfig.js
├── controller
│   └── faq-controller.js
├── migrations
│   └── 202502011752...
├── models
│   ├── faq.js
│   └── index.js
├── node_modules
├── repository
│   ├── faq-repository.js
│   └── index.js
├── routes
│   └── v1
│       └── index.js
│   └── index.js
├── seeders
├── services
│   ├── faq-service.js
│   └── index.js
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md

```

````
Frontend
└── frontend
    ├── node_modules
    ├── public
    ├── src
    │   ├── assets
    │   └── components
    │       └── accordian.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js

```

# FAQ Management System

This is a full-stack FAQ management system with a React frontend and a Node.js (Express) backend connected to a MySQL database. Users can view and interact with FAQs, and admins can manage them through API endpoints.

## Features

- **Frontend (React):**
  - Displays FAQ questions and answers in an accordion-style layout.
  - Allows users to toggle visibility of answers by clicking on the arrow.
  - Fetches FAQ data from the backend API.

- **Backend (Node.js/Express):**
  - Exposes RESTful API endpoints for CRUD operations on FAQs.
  - Supports creating, updating, deleting, and retrieving FAQ entries.
  - Connected to a MySQL database using Sequelize ORM.


## Getting Started

### Prerequisites

- **Node.js:** Make sure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
- **MySQL:** You need MySQL installed to run the database.

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/tushar04mishra/FAQ-Store.git
```

### Backend Setup

#### Step 1: Install Dependencies

Navigate to the backend directory and install the necessary dependencies:

```bash
cd faq-management
npm install
```

#### Step 2: Configure Database

Create a `.env` file in the backend directory and set up your MySQL database connection:

```bash
DB_USERNAME=root
DB_PASSWORD=passowrd
DB_NAME=faq_db
DB_HOST=127.0.0.1
```

Ensure your MySQL server is running and the database `faq_db` exists. You can create it using:

```sql
CREATE DATABASE faq_db;
```

#### Step 3: Run Migrations

To set up the database schema, run the Sequelize migrations:

```bash
npx sequelize-cli db:migrate
```

#### Step 4: Start the Server

Run the following command to start the backend server:

```bash
npm start
```

Your backend API will now be available at `http://localhost:3000`.

### Frontend Setup

#### Step 1: Install Dependencies

Navigate to the frontend directory and install the necessary dependencies:

```bash
cd frontend
npm install
```

#### Step 2: Configure the API URL

Update the API URL in your `frontend/src/components/accordian.jsx` file to point to the backend:

```javascript
const API_URL = 'http://localhost:3000/api/v1/faqs'; // Replace with your backend URL
```

#### Step 3: Start the Frontend Server

Run the following command to start the frontend server:

```bash
npm start
```

Your frontend will be available at `http://localhost:5173`.

## API Endpoints

### Create FAQ

**Endpoint:** `POST /api/v1/faq`

**Request Body:**

```json
{
    "question": "Your question",
    "answer": "Your answer",
    "question_hi": "Your question in Hindi",
    "answer_hi": "Your answer in Hindi",
    "question_bn": "Your question in Bengali",
    "answer_bn": "Your answer in Bengali"
}
```

### Get FAQ by ID

**Endpoint:** `GET /api/v1/faq/:id`

**Response:**

```json
{
    "data": {
        "id": 1,
        "question": "Your question",
        "answer": "Your answer"
    }
}
```

### Update FAQ

**Endpoint:** `PATCH /api/v1/faq/:id`

**Request Body:**

```json
{
    "question": "Updated question",
    "answer": "Updated answer"
}
```

### Delete FAQ

**Endpoint:** `DELETE /api/v1/faq/:id`

## .gitignore

Ensure sensitive information is not committed to version control by adding the following files to `.gitignore`:

```bash
backend/.env
```

You can also ignore other files such as `node_modules` or build directories by adding them to `.gitignore`.

## Notes

- Make sure the backend and frontend servers are running at the same time for smooth interaction.
- If you make changes to the database schema, remember to run migrations to update your MySQL database.
- This README file provides basic setup instructions, but you can extend it with more details as needed.
````
