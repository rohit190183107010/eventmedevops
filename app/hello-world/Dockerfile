FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 9999
CMD [ "node", "dist/index.js" ]