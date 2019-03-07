#base image
FROM node:8

# copy src (local) into container src folder 
COPY src/ /src

# our workdir is where we will be using our RUN command
WORKDIR /src

RUN npm install

# exposing a particular port for the application
EXPOSE 9696

CMD ["node", "index.js"]