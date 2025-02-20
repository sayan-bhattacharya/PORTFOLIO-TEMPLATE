FROM --platform=linux/amd64 node:18-alpine AS builder

WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy rest of the application
COPY . .

# Build application
RUN npm run build

# Production image
FROM --platform=linux/amd64 node:18-alpine AS runner

WORKDIR /app

# Copy built assets
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

EXPOSE 8080

CMD ["npm", "start"]