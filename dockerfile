# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Ionic and Cordova globally
RUN npm install -g @ionic/cli cordova

# Install any needed packages
RUN npm install --force

# Add the rest of the app's source code
COPY . .

# Make port 8100 available to the world outside this container
EXPOSE 8100

# Define environment variable
ENV IONIC_SERVE_ADDRESS=0.0.0.0

# Run ionic serve when the container launches
CMD ["ionic", "serve", "--external"]