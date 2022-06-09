FROM node:16.15.0 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
ARG configuration=production
RUN npm run build --configuration $configuration

FROM nginx:latest
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
