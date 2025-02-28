# Criar diretórios principais
New-Item -ItemType Directory -Path "uber-clone/backend/src/auth"
New-Item -ItemType Directory -Path "uber-clone/backend/src/users"
New-Item -ItemType Directory -Path "uber-clone/backend/src/rides"
New-Item -ItemType Directory -Path "uber-clone/backend/src/payments"
New-Item -ItemType Directory -Path "uber-clone/backend/src/maps"
New-Item -ItemType Directory -Path "uber-clone/backend/src/ratings"
New-Item -ItemType Directory -Path "uber-clone/backend/src/admin"
New-Item -ItemType Directory -Path "uber-clone/backend/src/database"
New-Item -ItemType Directory -Path "uber-clone/backend/src/utils"

New-Item -ItemType Directory -Path "uber-clone/frontend/passenger-app/src/screens"
New-Item -ItemType Directory -Path "uber-clone/frontend/passenger-app/src/components"
New-Item -ItemType Directory -Path "uber-clone/frontend/passenger-app/src/navigation"
New-Item -ItemType Directory -Path "uber-clone/frontend/passenger-app/src/services"
New-Item -ItemType Directory -Path "uber-clone/frontend/passenger-app/src/utils"

New-Item -ItemType Directory -Path "uber-clone/frontend/driver-app/src/screens"
New-Item -ItemType Directory -Path "uber-clone/frontend/driver-app/src/components"
New-Item -ItemType Directory -Path "uber-clone/frontend/driver-app/src/navigation"
New-Item -ItemType Directory -Path "uber-clone/frontend/driver-app/src/services"
New-Item -ItemType Directory -Path "uber-clone/frontend/driver-app/src/utils"

New-Item -ItemType Directory -Path "uber-clone/admin-panel/src/pages"
New-Item -ItemType Directory -Path "uber-clone/admin-panel/src/components"
New-Item -ItemType Directory -Path "uber-clone/admin-panel/src/services"
New-Item -ItemType Directory -Path "uber-clone/admin-panel/src/utils"

New-Item -ItemType Directory -Path "uber-clone/api"

# Criar arquivos principais
New-Item -ItemType File -Path "uber-clone/backend/src/main.ts"
New-Item -ItemType File -Path "uber-clone/backend/Dockerfile"
New-Item -ItemType File -Path "uber-clone/backend/package.json"
New-Item -ItemType File -Path "uber-clone/backend/.env"

New-Item -ItemType File -Path "uber-clone/frontend/passenger-app/src/App.tsx"
New-Item -ItemType File -Path "uber-clone/frontend/passenger-app/package.json"

New-Item -ItemType File -Path "uber-clone/frontend/driver-app/src/App.tsx"
New-Item -ItemType File -Path "uber-clone/frontend/driver-app/package.json"

New-Item -ItemType File -Path "uber-clone/admin-panel/src/App.tsx"
New-Item -ItemType File -Path "uber-clone/admin-panel/package.json"

New-Item -ItemType File -Path "uber-clone/api/swagger.yaml"

New-Item -ItemType File -Path "uber-clone/docker-compose.yml"
New-Item -ItemType File -Path "uber-clone/README.md"

# Preencher arquivos com conteúdo básico

# backend/main.ts
Add-Content -Path "uber-clone/backend/src/main.ts" -Value @"
console.log('Backend server started');
"@

# backend/Dockerfile
Add-Content -Path "uber-clone/backend/Dockerfile" -Value @"
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD [""npm"", ""start""]
"@

# backend/package.json
Add-Content -Path "uber-clone/backend/package.json" -Value @"
{
  ""name"": ""backend"",
  ""version"": ""1.0.0"",
  ""main"": ""src/main.ts"",
  ""scripts"": {
    ""start"": ""ts-node src/main.ts""
  },
  ""dependencies"": {
    ""express"": ""^4.18.2"",
    ""dotenv"": ""^16.3.1""
  }
}
"@

# backend/.env
Add-Content -Path "uber-clone/backend/.env" -Value @"
PORT=3000
DB_URL=mongodb://localhost:27017/uber-clone
JWT_SECRET=your_jwt_secret
"@

# frontend/passenger-app/src/App.tsx
Add-Content -Path "uber-clone/frontend/passenger-app/src/App.tsx" -Value @"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>Passenger App</Text>
    </NavigationContainer>
  );
}
"@

# frontend/passenger-app/package.json
Add-Content -Path "uber-clone/frontend/passenger-app/package.json" -Value @"
{
  ""name"": ""passenger-app"",
  ""version"": ""1.0.0"",
  ""main"": ""index.js"",
  ""scripts"": {
    ""start"": ""react-native start"",
    ""android"": ""react-native run-android"",
    ""ios"": ""react-native run-ios""
  },
  ""dependencies"": {
    ""react"": ""18.2.0"",
    ""react-native"": ""0.72.0""
  }
}
"@

# frontend/driver-app/src/App.tsx
Add-Content -Path "uber-clone/frontend/driver-app/src/App.tsx" -Value @"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>Driver App</Text>
    </NavigationContainer>
  );
}
"@

# frontend/driver-app/package.json
Add-Content -Path "uber-clone/frontend/driver-app/package.json" -Value @"
{
  ""name"": ""driver-app"",
  ""version"": ""1.0.0"",
  ""main"": ""index.js"",
  ""scripts"": {
    ""start"": ""react-native start"",
    ""android"": ""react-native run-android"",
    ""ios"": ""react-native run-ios""
  },
  ""dependencies"": {
    ""react"": ""18.2.0"",
    ""react-native"": ""0.72.0""
  }
}
"@

# admin-panel/src/App.tsx
Add-Content -Path "uber-clone/admin-panel/src/App.tsx" -Value @"
import React from 'react';

export default function App() {
  return <div>Admin Panel</div>;
}
"@

# admin-panel/package.json
Add-Content -Path "uber-clone/admin-panel/package.json" -Value @"
{
  ""name"": ""admin-panel"",
  ""version"": ""1.0.0"",
  ""main"": ""index.js"",
  ""scripts"": {
    ""start"": ""react-scripts start"",
    ""build"": ""react-scripts build"",
    ""test"": ""react-scripts test""
  },
  ""dependencies"": {
    ""react"": ""18.2.0"",
    ""react-dom"": ""18.2.0"",
    ""react-scripts"": ""5.0.1""
  }
}
"@

# api/swagger.yaml
Add-Content -Path "uber-clone/api/swagger.yaml" -Value @"
openapi: 3.0.0
info:
  title: Uber Clone API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: Successful response
"@

# docker-compose.yml
Add-Content -Path "uber-clone/docker-compose.yml" -Value @"
version: '3'
services:
  backend:
    build: ./backend
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=development
  database:
    image: mongo:latest
    ports:
      - '27017:27017'
"@

# README.md
Add-Content -Path "uber-clone/README.md" -Value @"
# Uber Clone Project

This is a full-stack Uber clone project with the following structure:

- **Backend**: Node.js + Express
- **Frontend**:
  - Passenger App: React Native
  - Driver App: React Native
- **Admin Panel**: React
- **API Documentation**: Swagger/OpenAPI
- **Docker**: Docker Compose for running services

## Getting Started

1. Clone the repository.
2. Run `docker-compose up` to start all services.
3. Access the apps and admin panel in your browser or mobile device.
"@