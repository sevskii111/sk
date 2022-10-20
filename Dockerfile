FROM node:16
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY ["client/package.json", "client/package-lock.json*", "./client/"]
WORKDIR /app/client
RUN npm install --production
COPY ["./client", "./"]
RUN npm run build
WORKDIR /app
COPY . .
CMD [ "npm", "run", "start"]