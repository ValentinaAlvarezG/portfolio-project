FROM node:18-alpine

WORKDIR /portfolio
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/index.js"]

