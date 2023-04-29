FROM node:14

WORKDIR /app

COPY ./package.json ./

RUN npm install --legacy-peer-deps
RUN npm install mongodb@2.2.12
COPY . .

CMD ["node","index.js"]
