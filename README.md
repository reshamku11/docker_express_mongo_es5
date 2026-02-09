# 🚀 Docker Express MongoDB Boilerplate

A simple and scalable **Node.js + Express + MongoDB** application running inside **Docker** using **Docker Compose**.  
MongoDB runs in a separate container, and the app connects to it using Docker’s internal network.

---

## 📦 Tech Stack

- **Node.js** (18)
- **Express.js**
- **MongoDB** (v6)
- **Mongoose**
- **Docker & Docker Compose**
- **dotenv**

---

## 📂 Project Structure

DOCKER_EXPRESS_MONGO_ESS
│
├── src
│ ├── config
│ │ └── db.connection.js
│ ├── controller
│ ├── middleware
│ ├── model
│ └── route
│
├── .env
├── app.js
├── server.js
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

PORT=4000
MONGO_URI=mongodb://mongo:27017/AuthTest

##  ⚠️ Important

Use mongo as the hostname (Docker service name)

❌ Do not use localhost or 127.0.0.1 inside Docker containers


## 🐳 Docker Setup

The docker-compose.yml file runs two services:

app → Express server

mongo → MongoDB database

MongoDB data is persisted using Docker volumes.


##  ▶️ How to Run the Project
###  1️⃣ Stop running containers (recommended)
docker-compose down -v

### 2️⃣ Build and start containers
docker-compose up --build

## ✅ Verify the Application
Health Check API
GET http://localhost:4000/test


Expected Response

healthy server

Logs should show
database connected successfully

##  🧠 Common Issues & Fixes
❌ MongoDB connection fails in Docker

Reason:
Using localhost in MongoDB URI.

Fix:
Use Docker service name mongo.

mongoose.connect(process.env.MONGO_URI);

## 🛠 Useful Docker Commands
docker ps


List running containers.

docker-compose logs app


View application logs.

docker-compose logs mongo


View MongoDB logs.

## 📌 Notes

Works fine with npm start when running locally

Uses Docker networking for inter-container communication

Ready for production extensions (NGINX, CI/CD, etc.)

## ✨ Author

Resham Deo
Backend Developer
Node.js | Docker | MongoDB