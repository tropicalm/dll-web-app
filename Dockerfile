
FROM node:alpine
# FROM node:11.14.0-alpine
# Create app directory

RUN apk update
RUN apk upgrade
RUN apk add --update python make g++

RUN mkdir -p /usr/src/app
# Set workdirr
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
#RUN npm install grpc --build-from-source

# Bundle app source
COPY . /usr/src/app

RUN npm install -g serve
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["serve", "-s", "-l", "8080", "./build"]