# 🧠 LLM-Powered Support Ticket System

An end-to-end **LLM-powered support ticket classification system** that automatically categorizes incoming support tickets using a Large Language Model (Gemini), stores them in a database, and provides real-time analytics via APIs and a frontend dashboard.

This project demonstrates **practical Generative AI usage**, backend engineering, API design, and Dockerized deployment suitable for enterprise environments.

---

## 🚀 Features

- 🧠 **LLM-Based Ticket Classification**  
  Automatically classifies support tickets into categories using Google Gemini.

- 🔁 **Graceful LLM Fallback**  
  If the LLM fails, the system safely defaults to an `Uncategorized` label.

- ⚙️ **RESTful Backend APIs**  
  Create tickets, classify them, and fetch aggregated statistics.

- 📊 **Ticket Analytics**  
  View category-wise ticket counts using optimized database queries.

- 🐳 **Dockerized Setup**  
  One-command startup using Docker Compose.

- 🧩 **Frontend + Backend Separation**  
  Clean separation of concerns for scalability.

---

## 🏗️ Tech Stack

**Backend**
- Python, Django, Django REST Framework
- Google Gemini (LLM)
- PostgreSQL
- Prompt Engineering & Structured LLM Output

**Frontend**
- JavaScript

**DevOps**
- Docker, Docker Compose

---

## 🧠 How the System Works

1. A user submits a support ticket.
2. The backend sends the ticket text to the LLM with a structured prompt.
3. The LLM returns a category in strict JSON format.
4. The ticket and category are stored in PostgreSQL.
5. APIs expose ticket data and category-wise analytics.
6. The frontend consumes these APIs for display.

---

## 📂 Project Structure

```
support-ticket-system-llm/
│
├── backend/
│   ├── tickets/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   ├── core/
│   ├── manage.py
│
├── frontend/
│   ├── src/
│
├── docker-compose.yml
├── README.md
```

---

## 🔧 Setup & Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Mujahid996633/support-ticket-system-llm.git
cd support-ticket-system-llm
```

### 2️⃣ Create Environment File
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3️⃣ Run with Docker
```bash
docker-compose up --build
```

Backend: http://localhost:8000  
Frontend: http://localhost:3000

---

## 🔌 API Endpoints

### Create Ticket
`POST /api/tickets/`

```json
{
  "title": "Login issue",
  "description": "Unable to log in after password reset"
}
```

---

### Ticket Statistics
`GET /api/tickets/stats/`

```json
{
  "Authentication": 5,
  "Billing": 3,
  "Technical": 7,
  "Uncategorized": 1
}
```

---

## 🧪 Error Handling

- LLM failures fall back to `Uncategorized`
- Tickets are always stored safely

---

## 🎯 Why This Project Matters

- Real-world LLM integration
- Enterprise-style backend
- AI-driven automation
- Dockerized deployment

---

## 👤 Author

**Shaik Mujahid**  
GitHub: https://github.com/Mujahid996633
