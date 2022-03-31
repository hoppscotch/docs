FROM node:16-alpine
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
EXPOSE 3000
COPY  package.json .
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run generate
CMD ["npm", "start"]