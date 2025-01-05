# Use Node 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

ENV DATABASE_URL="postgresql://database_r99c_user:rIbKNv9bEWecjD5cvmnZzpJERB7M0PX7@dpg-ctssuhdds78s73cimacg-a.oregon-postgres.render.com/database_r99c"

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
CMD ["npm", "run", "start"]
