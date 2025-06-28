# 🩸 Blood Bank Management System

A combined full-stack web application to manage blood donation, tracking, and allocation for donors, NGOs, hospitals, and administrators—all in one integrated platform.

---

## 🌐 Live Demo
https://66b618cc3f40816725a8ee06--zesty-pegasus-45f599.netlify.app/

---

## 🛠 Tech Stack

- **Frontend**: React, React Router, Axios, custom CSS  
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, Bcrypt  
- **Deployment**: Frontend on Netlify, Backend on Render

---

## 🔍 Core Features

- **Multi-role Access**: Donor, NGO/Hospital, Admin  
- **Authentication**: JWT-secured signup/login  
- **Blood Management**: Donors can register and update donations; NGOs/hospitals view availability  
- **Admin Dashboard**: Manage users, blood inventory, and access controls  
- **Live Updates**: Real-time availability tracking

---

## 📁 Project Structure

```
New/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
└── frontend/
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        ├── utils/
        └── App.js
```

---

## 🚀 Getting Started Locally

1. Clone the repo:  
   ```bash
   git clone https://github.com/Akshar22Dubey/New.git
   cd New
   ```

2. Setup backend:
   ```bash
   cd backend
   npm install
   echo "MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>" > .env
   npm start
   ```

3. Setup frontend:
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

Visit `http://localhost:3000` to explore the app.
