FROM node:4.0.0

RUN npm install

ADD . /src
WORKDIR /src

EXPOSE 8888

CMD bash
