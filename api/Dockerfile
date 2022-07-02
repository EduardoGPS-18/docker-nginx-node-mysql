FROM node:15

WORKDIR /app/
COPY ./package.json package.json
COPY ./index.js index.js
RUN npm install

ENTRYPOINT [ "node", "index.js" ]