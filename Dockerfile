FROM node:20-alpine3.19 AS build-stage
RUN mkdir -p /app
WORKDIR /app
COPY . /app/
RUN cd /app && npm instal && npm run build

FROM httpd:2.4.57-alpine
COPY --from=build-stage /app/dist /usr/local/apache2/htdocs
