FROM node:4.0.0

RUN npm install && \
		npm install --global gulp

ADD . /src
WORKDIR /src

EXPOSE 9000

CMD bash
