FROM node:16-alpine

WORKDIR /app
COPY main.js /app/main.js
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
