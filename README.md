# Quiz App with React and React Router

This is a simple quiz application built with React and React Router. The purpose of this app is to practice using React Router for navigation and displaying selected answers and scores after submitting the quiz. It also includes a dark/light mode feature to enhance the user experience.

## Features

- Quiz questions and options are dynamically loaded from a data source.
- React Router is used for navigation between different quiz pages.
- Selected answers are displayed to the user.
- Correct and wrong answers are highlighted after submitting the quiz.
- Dark/light mode feature for a personalized user experience.

## Installation

To run the quiz app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/hemant14050/quiz-app-router.git
   ```

2. Change to the project directory:

   ```bash
   cd quiz-app-router
   ```

3. Install the dependencies:

   ```bash
   npm install
   npm i react-toggle-dark-mode
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to access the app.

## Usage

The quiz app allows users to navigate through the quiz questions using React Router. They can select their answers and submit the quiz to see the results. After submitting, the correct answers are highlighted in green, while the wrong answers are highlighted in red. The app also provides a dark/light mode feature for a customized user experience.

To customize the quiz questions and options, you can modify the data source file located in `src/QuestionsData.js`. Simply update the array of question objects with your desired questions and options.

To customize the styling of the app, you can modify the CSS files located in `src/index.css`.

## Dark/Light Mode

The quiz app includes a dark/light mode feature for a personalized user experience. By default, the app is set to light mode. However, users can switch to dark mode by clicking on the toggle button located at the top of app.

To customize the dark/light mode feature, you can modify the CSS styles in the `index.css` file. The `.light-mode` class contains the CSS variables that define the colors for light mode and `.dark-mode` for dark mode. Adjust the values of these variables to match your desired color scheme.
