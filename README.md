# Alien API

This is a simple Node.js and Express API that interacts with a MongoDB database to manage alien data. It provides endpoints to create, read, update, and delete (CRUD) alien records.

## Features
- Connects to a MongoDB database using Mongoose.
- Provides RESTful API endpoints for managing aliens.
- Supports operations like retrieving all aliens, adding new aliens, updating existing ones, and deleting them.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/alien-api.git
   ```

2. Navigate to the project directory:
   ```sh
   cd alien-api
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start MongoDB locally:
   ```sh
   mongod
   ```

5. Start the server:
   ```sh
   node app.js
   ```

## API Endpoints

### Get all aliens
```http
GET /alien
```
Response:
```json
[
  {
    "_id": "60f7d2b9c2a4b43290c3a123",
    "name": "Zorg",
    "tech": "Quantum AI",
    "sub": true
  }
]
```

### Get a single alien by ID
```http
GET /alien/:id
```
Response:
```json
{
  "_id": "60f7d2b9c2a4b43290c3a123",
  "name": "Zorg",
  "tech": "Quantum AI",
  "sub": true
}
```

### Add a new alien
```http
POST /alien
```
Request Body:
```json
{
  "name": "Xenon",
  "tech": "Teleportation",
  "sub": false
}
```
Response:
```json
{
  "_id": "60f7d2b9c2a4b43290c3a125",
  "name": "Xenon",
  "tech": "Teleportation",
  "sub": false
}
```

### Update an alien
```http
PATCH /alien/:id
```
Request Body:
```json
{
  "sub": true
}
```
Response:
```json
{
  "_id": "60f7d2b9c2a4b43290c3a125",
  "name": "Xenon",
  "tech": "Teleportation",
  "sub": true
}
```

### Delete an alien
```http
DELETE /alien/:id
```
Response:
```json
{
  "message": "Alien deleted successfully"
}
```

## Project Structure
```
.
├── models
│   ├── alien.js
├── routers
│   ├── aliens.js
├── app.js
├── package.json
├── README.md
```

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## License
This project is licensed under the MIT License.

