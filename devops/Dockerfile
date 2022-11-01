FROM node:10-alpine
WORKDIR /usr/src/api-cliente
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 80
ENV PORT=80
CMD [ "npm", "start" ]
