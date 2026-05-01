# Elev8 — Fitness & Wellness Website

A full-stack web app built with **React** (frontend) and **Spring Boot** (backend).

---

## Before You Start

Make sure these are installed on your computer:

- **Node.js** (v18+) → https://nodejs.org
- **Java JDK** (v21+) → https://adoptium.net
- **Apache Maven** (v3.8+) → https://maven.apache.org/download.cgi

To check if they're installed, open a terminal and run:

```
node -v
java -version
mvn -version
```

---

## Project Folders

```
elev8/
└── Elev8_final/
    ├── Elev8/                 ← Frontend (React)
    └── elev8-chat-backend/    ← Backend (Spring Boot)
```

---

## Running the App

You need **two terminals open** — one for the backend, one for the frontend.

---

### Terminal 1 — Start the Backend

```
cd path/to/Elev8_final/elev8-chat-backend
mvn spring-boot:run
```

Wait until you see:
```
Started Elev8ChatApplication in X seconds
```

Backend is now running at → **http://localhost:8080**

---

### Terminal 2 — Start the Frontend

```
cd path/to/Elev8_final/Elev8
npm install
npm run dev
```

Wait until you see:
```
➜  Local:   http://localhost:5173/
```

Open your browser and go to → **http://localhost:5173**

---

## That's it! 🎉

Both servers need to stay running for the site to work fully.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `mvn` not recognized | Add Maven's `bin` folder to your system PATH |
| `java` not found | Install JDK 21 and add it to PATH |
| `npm` not found | Install Node.js from https://nodejs.org |
| Port 8080 in use | Close whatever is using port 8080 and try again |
| Build fails | Run `mvn clean` first, then `mvn spring-boot:run` |
