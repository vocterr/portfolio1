# Use Node 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
COPY src/.env /src/.env

# Install dependencies
RUN npm install

# Copy the Prisma schema and migrations
COPY src/prisma ./src/prisma

# Generate the Prisma client
RUN npx prisma generate --schema=./src/prisma/schema.prisma
RUN npx prisma migrate deploy --schema=./src/prisma/schema.prisma
# Copy the rest of the project
COPY . .


# Start the application
CMD ["npm", "start"]
