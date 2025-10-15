# Backend Deployment Guide for Render

## 🚀 Deploying to Render

1. **Connect your GitHub repository** to Render
2. **Create a new Web Service** with these settings:
   - **Environment**: Docker
   - **Dockerfile Path**: `./Dockerfile`
   - **Port**: `8080`

3. **Add Environment Variables** in Render dashboard:
   ```
   SPRING_PROFILES_ACTIVE=prod
   ```

4. **Add PostgreSQL Database**:
   - Create a PostgreSQL database in Render
   - Connect it to your web service using the `fromService` configuration in render.yaml

5. **Deploy** - Render will automatically build and deploy your application

## 📋 Environment Variables

The following environment variables are automatically provided by Render:

- `DATABASE_URL` - PostgreSQL connection string
- `DB_USERNAME` - Database username
- `DB_PASSWORD` - Database password

## 🔧 Local Development

For local development with Docker:

```bash
# Build the image
docker build -t shopamtron-backend .

# Run with local MySQL database
docker run -p 8080:8080 \
  -e SPRING_PROFILES_ACTIVE=dev \
  -e SPRING_DATASOURCE_URL=jdbc:mysql://host.docker.internal:3306/shopamtron \
  -e SPRING_DATASOURCE_USERNAME=root \
  -e SPRING_DATASOURCE_PASSWORD=your_password \
  shopamtron-backend
```

## 🔒 Security Notes

- Update default database credentials before production deployment
- Consider implementing proper authentication for admin endpoints
- Set up proper CORS configuration for production domains

## 📁 File Structure

```
backend/
├── Dockerfile                 # Docker configuration
├── render.yaml               # Render deployment config
├── src/main/resources/
│   ├── application.properties     # Development config
│   └── application-prod.properties # Production config
└── uploads/                  # File upload directory
```
