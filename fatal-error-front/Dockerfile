FROM node:16

WORKDIR /front

COPY ["package.json", "./"]

RUN npm install

COPY . .

CMD ["yarn", "start"]
