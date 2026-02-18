# Use Node image for building
FROM node:18-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json /app/
RUN npm install

# Copy the rest of the code
COPY . /app/

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
