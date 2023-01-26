FROM node:18.13-bullseye-slim
WORKDIR /app

ENV APP_PORT=8080
ENV APP_ENVIRONMENT=qa
ENV DATABASE_HOST=localhost
ENV DATABASE_PORT=5432
ENV DATABASE_NAME=dev_db
ENV DATABASE_USERNAME=dev
ENV DATABASE_PASSWORD=password

COPY package*.json ./
RUN npm install
COPY dist/ ./
CMD [ "node","main.js" ]