# 💬 Real-Time Chat Application

A **full-stack real-time chat application** built using **React.js**, **Node.js**, **Express**, and **MongoDB** with **Socket.IO** for instant messaging.  
Users can register, log in, and chat with other users instantly in a secure and responsive environment.

---

## 🚀 Features

- 🔐 **Authentication System**
  - Secure login and registration using JWT (JSON Web Tokens).
  - Passwords hashed using bcrypt for added security.

- 💬 **Real-Time Messaging**
  - Instant message delivery with Socket.IO.
  - Displays online/offline status.

- 👥 **User Management**
  - See all registered users.
  - Select and start chatting with anyone.

- 🕓 **Message History**
  - Messages are stored in MongoDB and fetched automatically when a chat opens.

- 🌓 **Modern UI**
  - Built using React and Tailwind CSS for a sleek, responsive interface.

---

## 🧩 Tech Stack

**Frontend:**
- React.js  
- Context API  
- Tailwind CSS  

**Backend:**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Socket.IO  
- JWT Authentication  
- bcrypt.js  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ram-311/chat-app.git
cd chat-app
```

---

### 2️⃣ Install Dependencies

#### Backend:
```bash
cd server
npm install
```

#### Frontend:
```bash
cd ../client
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file inside the **server** folder and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Application

To run both backend and frontend, **open two terminals**:

#### 🖥️ Terminal 1 — Start the Backend
```bash
cd server
npm start
```

#### 💻 Terminal 2 — Start the Frontend
```bash
cd client
npm start
```

After both are running, open your browser and go to:  
👉 **http://localhost:5173/** (or the port your React app runs on)

---

## ⚡ How It Works

1. Users authenticate using JWT during login/register.  
2. Once logged in, they can see all users and start a conversation.  
3. Messages are sent in real time through **Socket.IO** and saved in MongoDB.  
4. When reopening the chat, previous messages are automatically loaded.

---

## 🔒 Security Highlights
- JWT authentication for protected routes.  
- Passwords encrypted using bcrypt.  
- Tokens verified for each request.  
