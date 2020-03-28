<h1 align="center">
    <img alt="Be The Hero" title="Be the Hero Logo" src="frontend/src/assets/logo.svg" width="200px" />
</h1>

<h4 align="center">
  🚀 Semana OmniStack 11.0    |    11th OmniStack Week 🚀
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Alcsaw/week-11">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Alcsaw/week-11">
  
  <a href="https://github.com/Alcsaw/week-11/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Alcsaw/week-11">
  </a>

  <a href="https://github.com/Alcsaw/week-11/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Alcsaw/week-11">
  </a>

  <a href="https://github.com/Alcsaw/week-11/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-GNU3-brightgreen">
  </a>
  
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#the-omnistack">The OmniStack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#be-the-hero">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-installation---running-locally">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

<br>

## :rocket: Technologies

This project was developed using the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Joi](https://hapi.dev/module/joi/)
- [React](https://reactjs.org)
- [Jest](https://jestjs.io/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

![Login page](/readme_images/BeTheHero-LoginPage.png)

## The OmniStack

OmniStack is the name given by Rocketseat to a fullstack of Javascript composed by Node.js on the back end, ReactJS on the front end and React Native for the mobile. One single programming language to dominate the entire development cycle, using technologies seen in many of the big companies today.


During the OmniStack week, Rocketseat provides 5 online classes - 1 each day from Monday to Friday - teaching how to build an app from scratch and finishing with an MVP. Every edition of this event brings a new app idea and the 11th one is here with Be The Hero.

## Be The Hero

The application developed in this week is called Be The Hero, a platform that connects NGOs  that need some assistance with people who can help.


For example, a NGO that takes care of abbandoned animals, can create an incident about a dog found on the street that is hurt and need a vet, which would cost a certain amount of money. This case would become public and a user of the mobile app can help, being the Hero of that case, by donating the needed amount of money to that NGO.


The website allows the NGO to view...

![NGO Profile page](/readme_images/BeTheHero-NGOProfilePage.png)

and register new incidents:
![Registering a new incident](/readme_images/BeTheHero-NewIncident.png)


While the app allows users to see cases that need help:

<h1 align="center">
    <img alt="Mobile app screenshots" title="Mobile app screenshots" src="/readme_images/BeTheHero-mobile.png" width="75%" />
</h1>

## 🔖 Layout

The app design was made by Rocketseat using [Figma](https://figma.com).

You can se the project mockup in [this link](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero-OmniStack-11?node-id=0%3A1).


## ⚙️ Installation - Running locally

1. Clone the repo;
2. Start the back end:
    ```bash
    cd backend
    yarn install
    yarn knex migrate:latest
    yarn start
    ```
3. Start the front end:
    ```bash
    cd frontend
    yarn install
    yarn start
    ```
4. Start the mobile app:
    ```bash
    cd mobile
    yarn install
    expo start
    ```


## 🤔 Contributing

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that I can review your changes (see [This page](https://help.github.com/pt/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) for details)

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## :memo: Licence

This project is provided freely as open source software, under the GNU General Public
License. Check out the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by [me](https://www.linkedin.com/in/alcsaw/) with the support of [Rocketseat](rocketseat.com.br)
