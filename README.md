[![Netlify Status](https://api.netlify.com/api/v1/badges/19b20451-5b28-4a76-b825-fc3640adab2c/deploy-status)](https://app.netlify.com/sites/sportseeapp/deploys)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ngc1987) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![GitHub](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/) [![GitHub](https://img.shields.io/badge/JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![GitHub](https://img.shields.io/badge/JSX-4F4FD4?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/docs/introducing-jsx.html) [![GitHub](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/) [![GitHub](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)


# SportSee : The physical activity tracking app

<p align="center">
🏃 The SportSee app measures your performance and fitness indicators. You can easily track your physical activity 🏃
</p>

![Mockup of the project](https://i.imgur.com/Zv7tsy8.png)

<p align="center">
<a href="https://sportseeapp.netlify.app/">🌍 Live démo
</a>
</p>


## 1. Documentation

The documentation can be viewed by following the link below : [documentation](https://sportseedocumentation.netlify.app/)

## 2. Author

Thomas Semeria


## 3. Languages

- JS
- JSX
- SCSS

## 4. Project
This project is the 12th project for the React front-end developer [formation](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react#main_content) of OpenClassRooms.
We have to build an App who show on a dashboard differents informations of the user on some charts.
For this project i use:

- [React](https://reactjs.org/)
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Sass](https://sass-lang.com/)
- [Recharts.js](https://recharts.org/en-US)

### 4.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.


### 4.2 Launching the project

- First Fork the [Back-end datas](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) and follow the instructions to install it. When it's done write `npm start` on the terminal.
Magic 🌟 happens and the API is hosted on http://localhost:3000
- Then fork this repository
- Clone it on your computer.
- Open the terminal and write `cd sportsee`
- Then write on the terminal `npm install` to install all the dependencies
- You can now do an `npm start` and the App is now hosted on http://localhost:3001

You can choose the user 12 or the user 18 to see differents datas

## 5. Endpoints

### 5.1 Used endpoints

To retrieve user information, the project uses the endpoints below: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


### 5.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.


