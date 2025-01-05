# Use Node 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon globally (optional, if required for development)
RUN npm install -g nodemon

# Set the environment variable for the database connection
ENV DATABASE_URL="postgresql://database_r99c_user:rIbKNv9bEWecjD5cvmnZzpJERB7M0PX7@dpg-ctssuhdds78s73cimacg-a.oregon-postgres.render.com/database_r99c"

# Copy the Prisma schema
COPY src/prisma ./src/prisma

# Generate the Prisma client
RUN npx prisma generate --schema=./src/prisma/schema.prisma

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3001

# Run migrations and start the application
CMD ["sh", "-c", "npx prisma migrate deploy --schema=./src/prisma/schema.prisma && npx prisma studio --schema=./src/prisma/schema.prisma && npm run start"]
