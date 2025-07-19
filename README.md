# 📚 Library Management System Backend

This is the **backend API** for a simple Library Management System (LMS), built using **Node.js**, **Express**, and **MongoDB**. It allows you to **create**, **read**, **update**, and **delete** book records from a database.

---

## 🚀 Features

- Add new books to the library 📕
- View all available books 📖
- Update book information ✏️
- Delete books from the system 🗑️

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv for environment variables
- Postman for API testing

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sujal-1245/LMS-App.git
cd LMS-App
git checkout backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual connection string.

### 4. Start the Server

```bash
npm start
```

Server runs at: `http://localhost:3000`

---

## 📚 API Endpoints

> All endpoints start with: `/api/books`

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/books`     | Get all books        |
| POST   | `/api/books`     | Add a new book       |
| GET    | `/api/books/:id` | Get a specific book  |
| PUT    | `/api/books/:id` | Update a book's info |
| DELETE | `/api/books/:id` | Delete a book        |

---

## 📸 Postman Screenshots

* 📥 Add Book
  <img width="1262" height="784" alt="image" src="https://github.com/user-attachments/assets/606720c0-1c3b-4dda-9ad4-7c3253ce061b" />


* 📤 Get All Books
  <img width="1262" height="757" alt="image" src="https://github.com/user-attachments/assets/882887c4-b613-4607-8871-542c70b97394" />


* 📝 Update Book
  <img width="1274" height="790" alt="image" src="https://github.com/user-attachments/assets/981ef62f-3355-4fd3-aa9a-b5250a9007ba" />

* 🗑️ Delete Book
  <img width="1270" height="608" alt="image" src="https://github.com/user-attachments/assets/c2dda9d2-c890-4b4c-807e-63e3d0a5332b" />


---

## 🗂️ Folder Structure

```
lms-backend/
├── controllers/       # Logic for handling routes
├── models/            # Mongoose book schema
├── routes/            # Book routes
├── .env               # Environment config
├── server.js          # Entry point
├── package.json
└── README.md
```

---

## 👨‍💻 Author

**Sujal Bhagat**
🔗 [LinkedIn](https://www.linkedin.com/in/sujal-bhagat-sdb1245/)
💻 [GitHub](https://github.com/sujal-1245)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).
