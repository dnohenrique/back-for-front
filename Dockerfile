FROM node:10-alpine
WORKDIR /usr/src/api-cliente
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
ENV PORT=80
CMD [ "npm", "start" ]
