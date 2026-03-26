FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .

ENV NEXT_OUTPUT_MODE=server
RUN npm run build
RUN npm prune --omit=dev --legacy-peer-deps

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["npx","next","start","-p","8080"]
