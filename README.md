# Movie App

https://github.com/muzzammilHub/movie-web-app/assets/127538327/29fd4a9c-ce4d-4472-8253-1b4c79c9a09c

This project is a movie listing application built with React, Vite, and Tailwind CSS. It allows users to browse movies, mark them as favorites, and view the list of favorite movies.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)

## Installation

Follow these steps to set up and run the project locally.

### 1. Configure Project using React-Vite

1. **Install Vite**:
    ```bash
    npm create vite@latest . --template react
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

### 2. Configure Tailwind CSS

1. **Install Tailwind CSS**:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

2. **Configure Tailwind**: Update `tailwind.config.js` with the paths to all of your template files.
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. **Update CSS File**: In your `src` folder, create a `index.css` file (or update if it already exists) and include the following:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. **Import CSS**: Ensure you import the `index.css` file in your `main.jsx`.
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import './index.css';  // Add this line

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    ```

### 3. Creating .env File and Adding API Key

1. **Create .env File**: At the root of your project, create a file named `.env`.
    ```bash
    touch .env
    ```

2. **Add Movie Url**: Add your Movie Url to the `.env` file.
    ```env
    VITE_MOVIE_URL=Movie_URL
    ```

3. **Accessing Environment Variables**: You can access the environment variables in your project files like this:
    ```javascript
    const MOVIE_URL = import.meta.env.VITE_MOVIE_URL;
    ```

## Usage

1. **Start Development Server**:
    ```bash
    npm run dev
    ```


## Features

- Browse movies with detailed information
- Mark movies as favorites
- View a list of favorite movies
- Responsive design using Tailwind CSS


