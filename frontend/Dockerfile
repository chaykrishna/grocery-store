# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend files
COPY . .

# Build the frontend
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start frontend in development mode
CMD ["npm", "run", "dev"]

