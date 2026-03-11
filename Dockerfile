# build stage
FROM node:18-alpine as build-stage
WORKDIR /app

# Install native build tools (required for better-sqlite3 and other C++ addons)
RUN apk add --no-cache python3 make g++

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies using pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code and build
COPY . .
RUN pnpm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
