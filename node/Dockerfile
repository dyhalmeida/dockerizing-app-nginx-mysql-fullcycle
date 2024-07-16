FROM node:18.20.1-slim

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nodejs

USER nodejs

EXPOSE 3333