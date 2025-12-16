FROM node:20-alpine AS build

WORKDIR /app

COPY package.json tsconfig*.json vite.config.ts index.html ./
RUN npm install

COPY src ./src
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80