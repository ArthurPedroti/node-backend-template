<h1 align="center">Welcome to my Backend Template 👋</h1>

<h3 align="center" >
  A template for NodeJS backend projects
</h3>

<p align="center">
  <img alt="Languagues" src="https://img.shields.io/github/languages/count/ArthurPedroti/node-backend-template">
  <img alt="Top Languague" src="https://img.shields.io/github/languages/top/ArthurPedroti/node-backend-template">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ArthurPedroti/node-backend-template">
  <a href="https://github.com/ArthurPedroti/node-backend-template/commits/master">
    <img alt="Last commit date" src="https://img.shields.io/github/last-commit/ArthurPedroti/node-backend-template">
  </a>
   <a href="https://github.com/ArthurPedroti/node-backend-template/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/ArthurPedroti/node-backend-template">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/ArthurPedroti/node-backend-template">
</p>
<p align="center">

  <a href="https://github.com/ArthurPedroti" target="_blank">
    <img alt="Made by Arthur Pedroti" src="https://img.shields.io/badge/made%20by-Arthur_Pedroti-informational">
  </a>
  <a href="https://github.com/ArthurPedroti" target="_blank" >
    <img alt="Github - Arthur Pedroti" src="https://img.shields.io/badge/Github--%23F8952D?style=social&logo=github">
  </a>
  <a href="https://www.linkedin.com/in/arthurpedroti/" target="_blank" >
    <img alt="Linkedin - Arthur Pedroti" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
  </a>
  <a href="mailto:arthurpedroti@gmail.com" target="_blank" >
    <img alt="Email - Arthur Pedroti" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
  </a>
  <a href="https://api.whatsapp.com/send?phone=5519991830454"
        target="_blank" >
    <img alt="Fale comigo no whatsapp - Arthur Pedroti" src="https://img.shields.io/badge/Whatsapp--%23F8952D?style=social&logo=whatsapp">
  </a>

</p>

<p align="center">
  <a href="#Description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-languages">Languages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#file_cabinet-databases">Databases</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## Description

This template was coded in Typescript, TypeORM and Express, contains a login with a password recovery system. Also, have a notifications provider with MongoDB and a Redis provider to be used for cache. The recovery password email system was setup with AWS SES for production and the profile avatar setup to be saved with AWS S3.For commits, we setup a config with commitlint/commitizen/husky and for. For code analyses, we are using ESLint and Prettier. For tests, we are using JEST. You can see at the technologies section, all dependencies we are using.

To use this template you will need to configure the files bellow:

- ormconfig.json
- .env

It also has an insomnia file with the api docs to test all the login features, only need to reconfigure the "Response => Body Attribute" with the Request route.

Utils:
Generating the app_secret: http://www.md5.cz/ (type some random text and generate a hash)
AWS credentials: Take it creating a new user on Amazon

## :computer: Languages

- **#TypeScript**

## :books: Technologies

- **#Express**
- **#TypeORM**
- **#ESLint**
- **#Prettier**
- **#AWS S3**
- **#Multer**
- **#AWS SES**
- **#Celebrate**
- **#JWT**
- **#Nodemailer**
- **#Handlebars**
- **#TSringe**
- **#ioRedis**
- **#rate-limiter-flexible**
- **#Commitlint**
- **#Commitizen**
- **#Husky**

## :file_cabinet: Databases

- **#Postgres**
- **#MongoDB**
- **#Redis**

## Install

Init your repository before install, or you will need to reinstall husky.

```sh
yarn install
```

## Usage

```sh
yarn dev:server
```

## Author

👤 **Arthur Pedroti**

* Github: [@ArthurPedroti](https://github.com/ArthurPedroti)
* Linkedin: [@ArthurPedroti](https://www.linkedin.com/in/arthurpedroti)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ArthurPedroit/Template/issues). You can also take a look at the [contributing guide](https://github.com/ArthurPedroit/Template/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Arthur Pedroti](https://github.com/ArthurPedroti).<br />
This project is [MIT](https://github.com/ArthurPedroit/Template/blob/master/LICENSE) licensed.

---

Made by :blue_heart: by [Arthur Pedroti](https://github.com/ArthurPedroti)
