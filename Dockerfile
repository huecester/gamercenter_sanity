FROM node:18
WORKDIR /app
ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml ./
RUN [ "npm", "i" ]

COPY . .

CMD [ "npm", "run", "host" ]