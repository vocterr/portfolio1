# Use Node 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

ENV DATABASE_URL="postgresql://myuser:1234@database:5432/mydb?schema=public"

# Install dependencies
RUN npm install

RUN npm install -g nodemon

# Copy the Prisma schema and migrations
COPY src/prisma ./src/prisma

# Generate the Prisma client
RUN npx prisma generate --schema=./src/prisma/schema.prisma
# Copy the rest of the project
COPY . .

EXPOSE 3001


# Start the application
CMD ["npm", "run", "dev"]
