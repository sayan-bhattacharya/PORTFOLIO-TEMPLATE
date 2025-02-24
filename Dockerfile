FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY next.config.js ./
COPY .eslintrc.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port
ENV PORT 8080
EXPOSE 8080

# Start the application
CMD ["npm", "start"]