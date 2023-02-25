FROM node:16-buster AS build
WORKDIR /app
COPY . /app
# RUN npm install -g typescript 
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html

