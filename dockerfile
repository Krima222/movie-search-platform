FROM node:18.4.0-alpine3.16 as build

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.23.0-alpine
COPY ./nginx/*.* ./
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]