# Travel Pin Application 

#### Video Demo:  https://youtu.be/mbQ6BCjDlmQ
#### Description:

Welcome to the README for the **revolutionary** _Travel Pin Application_! This document serves as a comprehensive guide to understanding the project's structure, functionality, design choices, and much more.

## Table of Contents
- [Introduction](#introduction)
- [File Structure](#file-structure)
- [Installation and Setup](#installation-and-setup)
- [Features](#features)
- [Design Choices](#design-choices)
- [Contributing](#contributing)
- [License](#license)
- [Deployment](#deployment)

## Introduction
The **Travel Pin Application** is a _unique and interactive_ platform that enables users to document and share their global adventures. Whether you're an avid traveler or simply seeking inspiration, this application empowers you to create a personalized travel itinerary, pin your favorite locations on a world map, leave reviews and ratings, and much more.

## File Structure
The project's file structure is organized as follows:
```bash
client/
  ├── src/
  │   ├── components/
  │   │   ├── Geocoder.jsx
  │   │   ├── Loader.jsx
  │   │   ├── Navbar.jsx
  │   │   └── ...
  │   ├── assets/
  │   ├── pages/
  │   │   ├── About.jsx
  │   │   ├── Home.jsx
  │   │   ├── PinMap.jsx
  │   │   ├── NotFound.jsx
  │   │   ├── Pinin.jsx
  │   │   └── Register.jsx
  │   └── App.jsx
server/
  ├── index.js
  ├── routes/
  └── models/
```

## Installation and Setup
To get started with the **Travel Pin Application**, follow these steps:

1. Clone the repository: `$ git clone <repository-url>`
2. Navigate to the project directory: `$ cd <project-folder>`
3. Install dependencies for the client and server:
   - Client: `$ cd client` and then `$ npm install`
   - Server: `$ npm install` in the `server` directory by `$ cd server`
4. Run the application:
   - Client: `$ npm run dev` in the `client` directory
   - Server: `$ npm start` in the `server` directory

## Features
- Document and share global adventures through pins on a world map.
- Create a personalized travel itinerary with favorite locations.
- Leave ratings and reviews for visited locations.
- Explore an intuitive user interface showcasing travel journeys.
- User-friendly navigation through various pages like Home, PinMap, About, Pinin, Register, and NotFound.

## Design Choices
- The frontend is built using **React**, utilizing modern web development technoPinies such as **React Router** for navigation and styling with **SCSS**.
- The application employs **Mapbox** for the interactive world map feature.
- The project architecture follows a component-based structure for better code organization and maintainability.
- Error handling, user feedback, and notifications are enhanced with the **React Toastify** library.

## Contributing
Contributions to the **Travel Pin Application** are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix: `$ git checkout -b feature/your-feature-name`
3. Commit your changes: `$ git commit -m "Add your commit message"`
4. Push to your branch: `$ git push origin feature/your-feature-name`
5. Open a pull request to the main repository's `main` branch.

## Deployment
The **Travel Pin Application** has been deployed and can be accessed [here](https://travelpinv2.netlify.app/).

## License
The **Travel Pin Application** is open-source software licensed under the [MIT License](LICENSE).

Thank you for your interest and contribution to the project!

Feel free to contact us if you have any questions or feedback. Happy travels and happy coding!



