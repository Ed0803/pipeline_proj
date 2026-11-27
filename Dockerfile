FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY server.js ./

ARG APP_VERSION=local

ENV APP_VERSION=${APP_VERSION}
ENV NODE_ENV=production

USER node

EXPOSE 8080

CMD ["node", "server.js"]