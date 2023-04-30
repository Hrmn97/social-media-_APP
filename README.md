# Memories

![Memories](https://i.ibb.co/Z8Y0CJv/Screenshot-2020-10-30-at-11-10-04.png)

## Introduction
Full stack MERN project, to post blogs online. Built using ReactJS for frontend and NodeJs for backend as well MOngoDb atlas used to store data on clouds. This is open source project taken from github built by Javascript mastery on youtube.

### Built With
This application is built with love, dedication, coffee and:
* [ReactJs](https://react.dev/)
* [NodeJs](https://nodejs.org/en)

## Database
To use your database you need to create account on MongoDb and create new database. Then give database access and network access for the ip on which backend going to run. Then in Database use connect command create mongodb connection URL of application connect and use that one. If you try to connect directly with my database url it will not accessible as i have provided limited network access.

Setup:
- run `npm i` && `npm start`for client and `node index.js` for server side to start app.

## Dockerfile
Dockerfile for both Client side and server side built differently. To build and run containerized application, you need docker installed on system. Then for client side got to `cd client` and run `docker build . -t <image name>:version`. This will build an image for the application. Then use `docker run -d -p 3000:300 <image name>:version`. Now you will get frontend container up and running and you can acces the application on the port 3000 and for that you need to allow firewall rule.
Similarly for Backend got to server `cd server` and there run `docker build . -t <image name>:version`. And then build container from the application `docker run -d -p 5000:5000 <image name>:version`. And allow 5000 port firewall rule.

## Docker Product
To use docker compose, you need to install docker compose and then can directly create containers from docker compose file. use command `docker compose up -d` This will create two docker containers as for frontend and one for backend.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b Dev-<your name>`)
3. Commit your Changes (`git commit -m 'Add some feature name'`)
4. Push to the Branch (`git push origin Dev-<your name>`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Chetan Harman - [@Hrmn9765] (https://twitter.com/Harman9765) - My Twitter
Chetan Harman - [Chetan Harman](https://www.linkedin.com/in/chetan-harman-56310424a) - My LinkedIn
Project Link: [Social_media-App](https://github.com/Hrmn97/social-media-_APP)
