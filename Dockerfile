FROM node:20-bullseye-slim

WORKDIR /app

# Install latest 9router with --prefer-online
RUN npm install 9router@latest --prefer-online

COPY server.js .

ENV PORT=20128
ENV HOSTNAME=0.0.0.0
EXPOSE 20128

CMD ["node", "server.js"]
