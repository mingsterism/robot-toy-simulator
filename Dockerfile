# Use the official Bun image
FROM oven/bun:1

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb (if you have one)
COPY package.json ./
COPY bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN bun run build

# Run the application
CMD ["bun", "start"]
