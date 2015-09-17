FROM node:4.0.0

RUN npm install --global surge

ADD . /src
WORKDIR /src

EXPOSE 8888

CMD bash
