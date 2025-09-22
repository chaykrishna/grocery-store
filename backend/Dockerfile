# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
