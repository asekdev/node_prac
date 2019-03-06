FROM node:8
#change directory location
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
#fix copy command
COPY . .
EXPOSE 9191
CMD ["node", "index.js"]
