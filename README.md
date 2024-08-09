# React News App

This is a React-based news application that fetches and displays the latest news articles. The app features infinite scrolling, allowing users to continuously load more articles as they scroll.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Features](#features)
- [Acknowledgements](#acknowledgements)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/RudrakshKumar/NewsMonk.git
    ```

2. Navigate to the project directory:
    ```bash
    cd NewsMonk
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your API key:
    ```bash
    REACT_APP_API_KEY=your_api_key_here
    ```

5. Start the development server:
    ```bash
    npm run start
    ```

## Environment Variables

This project requires an API key for fetching news articles. You must create a `.env` file in the root directory and add the following environment variable:

- `REACT_APP_API_KEY`: Your API key from NewsData.io or any other news API service.

Example `.env` file:
```env
REACT_APP_API_KEY=your_api_key_here
```
 ## Usage

After setting up the project as described above, run the following command to start the development server:

```bash
    npm run start
```
The app will be available at http://localhost:3000.

## Features

- **Latest News**: Fetches and displays the latest news articles.
- **Infinite Scroll**: Automatically loads more articles as you scroll down.
- -**Diversity**:  The news has diverse categories to explore.

## Acknowledgements

-**React**:  A JavaScript library for building user interfaces.
-**NewsData.io**:  The API used to fetch the latest news.
