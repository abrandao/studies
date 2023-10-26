FROM node:latest

RUN npm cache clean --force
RUN mkdir /project

WORKDIR /project

COPY . .

RUN npm install
EXPOSE 8000
CMD ["npm","run"]