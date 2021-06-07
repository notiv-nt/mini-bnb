FROM node:16-alpine@sha256:f372a9ffcec27159dc9623bad29997a1b61eafbb145dbf4f7a64568be2f59b99
WORKDIR /app

COPY package*.json .
COPY yarn.lock .
RUN yarn install

COPY . .

CMD ["yarn", "dev"]
