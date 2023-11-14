<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!-- <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.<p> -->

<!-- <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a> -->

  <!-- <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p> -->
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

#NestJs EE Record

## Description

Backend for Application [EE Record](https://github.com/PhaiWisit/Flutter-App-EErecord-with-Provider)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

## Document

### Auth & User

##### POST : Register

```bash
# POST
localhost:5000/auth/register

# Body raw (json)
{
    "username":"test",
    "password":"1234",
    "email":"test@hotmail.com",
    "villageName":"Test Village"
}
```

##### POST : Login

```bash
# POST
localhost:5000/auth/login

# Body raw (json)
{
    "username": "test",
    "password": "1234"
}
```

##### GET : Profile

```bash
# GET
http://localhost:5000/auth/profile

# Authorization - Bearer Token
{{accessToken}}
```

### Visitor

##### POST : Create and Upload

```bash
# POST
localhost:5000/visitors/create

# Authorization Bearer Token
{{accessToken}}

# Body form-data
visitorHouseNumber : 65/738
visitorContactMatter : มาซื้อขนมครก
visitorVehicleType : รถจักรยาน
imageIdCard : <image_file>
imagePlate : <image_file>
```

##### PATCH : Update Visitor Status

```bash
# PATCH
localhost:5000/visitors/<id>/status

# Authorization Bearer Token
{{accessToken}}

# Body raw (json)
{
    "visitorStatus": "INACTIVE"
}
```

##### GET : Find All Vistors

```bash
# GET : Find All Vistors
localhost:5000/visitors

# GET : Find All Vistors Filter
localhost:5000/visitors?status=INACTIVE
localhost:5000/visitors?status=ACTIVE

# Authorization Bearer Token
{{accessToken}}
```

##### GET : Find Visitor

```bash
# GET
localhost:5000/visitors/<id>

# Authorization Bearer Token
{{accessToken}}
```

##### DELETE : Delete Visitor

```bash
# DELETE
localhost:5000/visitors/<id>

# Authorization Bearer Token
{{accessToken}}
```

##### GET : Get Image

```bash
# GET
localhost:5000/uploads/img/<image_name>
localhost:5000/uploads/img/hiyako.jpg

# Authorization Bearer Token
{{accessToken}}
```

<!-- ## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support). -->

## Developer

- Wisit Yoosabai
- w.phai@hotmail.com


