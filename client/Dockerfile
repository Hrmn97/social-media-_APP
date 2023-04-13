FROM node:14

WORKDIR /app

COPY package.json .
RUN npm install --save react react-dom react-scripts
COPY . .
RUN npm install
RUN npx browserslist@latest --update-db
CMD ["npm","run","start"]

