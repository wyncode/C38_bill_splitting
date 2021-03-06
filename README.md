<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
-->

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href=https://github.com/wyncode/C38_bill_splitting">
    <img src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822858/Cuenta%20App/Cuenta_shield_yis559.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cuenta APP</h3>

  <p align="center">
    An awesome BillSplitting APP!
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

# Cuenta Final Project

[Cuenta](https://cuenta-final-app.herokuapp.com/)

In the World we live in, `TIME` is of the essence. With that being said, we realized that there was a huge need for an APP to help make splitting a bill as easy as saying `SHOTS PLEASE.`

## Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Bootstrap](https://getbootstrap.com)
- [JQuery](https://jquery.com)
- [React](https://react.com)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Prerequisites

- npm
  `sh npm install npm@latest -g `

## Installation

1. `git clone` this repo
   `sh git clone https://github.com/your_username_/Project-Name.git `
2. `cd` into it.
3. `Install` NPM packages
   `sh yarn install `
4. `cd client && yarn install`
5. `cp .env.sample .env`

## Dependencies

| Client Side             | Server Side             |
| ----------------------- | ----------------------- |
| @stripe/react-stripe-js | @sendgrid/mail          |
| bootstrap               | bcryptjs                |
| react                   | cloudinary              |
| react-bootstrap         | concurrently            |
| react-dom               | cookie-parser           |
| react-qr-reader         | express                 |
| react-router            | jsonwebtoken            |
| axios                   | mongodb                 |
|                         | cors                    |
|                         | moment                  |
|                         | mongoose                |
|                         | validator               |
|                         | passport                |
|                         | passport-jwt            |
|                         | @stripe/react-stripe-js |
|                         | @stripe/stripe-js       |
|                         | bootstrap               |
|                         | npm                     |
|                         | passport                |
|                         | react-bootstrap         |
|                         | react-icons             |
|                         | react-qr-reader         |
|                         | react-stripe-checkout   |
|                         | react-toastify          |
|                         | sendgrid                |
|                         | stripe                  |
|                         | sweetalert              |
|                         | toast                   |
|                         | twilio                  |
|                         | validator               |

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Jeannie Torres - [https://www.linkedin.com/in/jeannie-torres/] - jeanniet89@gmail.com
Francesca Marquez - [https://www.linkedin.com/in/fmarq/] 
Sylvia Robles - [https://www.linkedin.com/in/sylvia-robles-00112a18a/] 
Kevin Hermanni - [https://www.linkedin.com/in/kevin-hermanni/] 
Rodolfo Romero -[https://www.linkedin.com/in/chefrudyromero/]
Samuel Robles - [https://www.linkedin.com/in/samuel-robles-30b2201b1

Project Link: [https://github.com/wyncode/C38_bill_splitting](https://github.com/wyncode/C38_bill_splitting)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [Stripe](https://stripe.com/)
- [Sendgrid/mail](https://sendgrid.com/)
- [Cloudinary](https://cloudinary.com/)
- [Twilio](https://www.twilio.com/messaging)
- [Toast](https://www.toast.com/kr)
- [React-toastify](https://www.npmjs.com/package/react-toastify)
- [Stripe/stripe](https://www.npmjs.com/package/react-stripe-elements)
- [Bcryptjs](https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js)
- [Cookie-parser](https://riptutorial.com/node-js/example/6012/using-a-template-engine)
- [Jsonwebtoken](https://jwt.io/introduction/)
- [Moment](https://momentjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Mongoose](https://medium.com/swlh/connecting-a-node-application-to-mongodb-using-mongoose-devdocs-3c924431efce)
- [Passport](https://www.mokuji.me/article/passport-hashing-remember)
- [Validator](https://yarnpkg.com/package/validator)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/wyncode/C38_bill_splitting.svg?style=flat-square
[contributors-url]: https://github.com/wyncode/C38_bill_splitting/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jeannie-torres-6628bb96/
[issues-shield]: https://img.shields.io/github/issues/wyncode/C38_bill_splitting.svg?style=flat-square
[issues-url]: https://github.com/wyncode/C38_bill_splitting/issues
