# 🧠 React Quiz App

A simple **Quiz Application** built using **React** and **JSON Server** as a mock backend.  
This project demonstrates basic authentication (Login & Signup), protected routes, data fetching from an external API, and state management in React.

## ⚙️ Installation & Setup

### 1️⃣ Clone this repository

```bash
git clone https://github.com/username/quiz-app-react.git
cd quiz-app-react
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup JSON Server

Copy the example database:

```bash
copy db.example.json db.json
```

(or manually create a db.json file based on db.example.json)

Run JSON Server on port 4000:

```bash
npx json-server --watch db.json --port 4000
```

### 4️⃣ Run the Quiz App

In a separate terminal, start the app:

```bash
npm run dev
```

Quiz App → runs on: http://localhost:5173/
JSON Server → runs on: http://localhost:4000/
