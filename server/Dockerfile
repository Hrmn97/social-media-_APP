FROM node:14

WORKDIR /app

COPY ./package.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g --force nodemon
COPY . .

CMD ["nodemon","index.js"]
