FROM node:18.20.1-slim AS installer

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

FROM installer AS builder

WORKDIR /app

COPY . .

RUN yarn build

FROM node:18.20.1-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nodejs

USER nodejs

EXPOSE 3333

ENTRYPOINT [ "node", "dist/main.js" ]
