
# MERN Video App

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to interact with a video collection — liking, rating, commenting, and tracking engagement.

## 📁 Structure

```
mern-video-app/
├── backend/
│   ├── models/
│   ├── routes/
│   └── controllers/
├── frontend/
│   └── src/components/
```

## 🛠 Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```
   node index.js
   ```

## 🖥 Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the Vite development server:
   ```
   npm run dev
   ```

Ensure CORS is handled properly for API access between frontend and backend.
