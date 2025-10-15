# Use OpenJDK 21 as base image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Install Maven for building the application
RUN apt-get update && apt-get install -y maven

# Copy pom.xml first for better Docker layer caching
COPY pom.xml .

# Download dependencies (this layer will be cached if pom.xml doesn't change)
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Create uploads directory for file storage
RUN mkdir -p uploads

# Copy application properties and other resources
COPY src/main/resources ./target/classes

# Expose the port the app runs on
EXPOSE 8080

# Set environment variables for production
ENV SPRING_PROFILES_ACTIVE=prod
ENV SPRING_DATASOURCE_URL=${DATABASE_URL}
ENV SPRING_DATASOURCE_USERNAME=${DB_USERNAME}
ENV SPRING_DATASOURCE_PASSWORD=${DB_PASSWORD}

# Run the application
CMD ["java", "-jar", "target/Shopamtron-0.0.1-SNAPSHOT.jar"]
