FROM python:3.6.1-alpine
RUN apk update && apk add build-base
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PYTHONUNBUFFERED 1
COPY . .