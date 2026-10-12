FROM node:20-bullseye-slim

WORKDIR /app

# Install latest 9router with --prefer-online as requested
RUN npm install -g 9router@latest --prefer-online

ENV PORT=20128
EXPOSE 20128

CMD ["sh", "-c", "9router -p ${PORT:-20128} -n -l"]
