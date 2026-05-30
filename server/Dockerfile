# server/Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies (ignoring dev dependencies for smaller image)
RUN npm install --omit=dev

# Copy prisma schema
COPY prisma ./prisma/

# Generate prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
