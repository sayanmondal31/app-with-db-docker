# base 
FROM node:alpine

# set workdirectory
WORKDIR /var/app

COPY ./package.json ./

RUN npm install

# copy all files and folder to current container
COPY . . 

CMD ["npm", "start" ]