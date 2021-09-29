FROM node:16-slim

WORKDIR /app
COPY main.js /app/main.js
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
