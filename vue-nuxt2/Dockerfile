FROM node:14-alpine@sha256:f07ead757c93bc5e9e79978075217851d45a5d8e5c48eaf823e7f12d9bbc1d3c
WORKDIR /app

COPY package*.json .
COPY yarn.lock .
RUN yarn install

COPY . .

ENV NUXT_HOST=0.0.0.0
EXPOSE 8080
CMD ["yarn", "dev"]
