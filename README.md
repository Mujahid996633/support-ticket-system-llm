# support-ticket-system-llm
# Support Ticket System with LLM Classification

## Overview
[span_2](start_span)A full-stack support ticket system built with Django, React, and PostgreSQL, fully containerized using Docker[span_2](end_span). 

[span_3](start_span)[span_4](start_span)The system features an automated classification engine that uses the **Google Gemini API** to suggest ticket categories and priority levels based on the user's description[span_3](end_span)[span_4](end_span).

## Tech Stack
* **[span_5](start_span)Backend:** Django + Django REST Framework[span_5](end_span)
* **[span_6](start_span)Frontend:** React[span_6](end_span)
* **[span_7](start_span)Database:** PostgreSQL[span_7](end_span)
* **[span_8](start_span)[span_9](start_span)AI Integration:** Google Gemini (LLM)[span_8](end_span)[span_9](end_span)
* **[span_10](start_span)[span_11](start_span)Infrastructure:** Docker & Docker Compose[span_10](end_span)[span_11](end_span)

## Setup Instructions
1. Clone this repository.
2. Create a `.env` file in the root directory and add your API key:
   `GEMINI_API_KEY=your_key_here`
3. [span_12](start_span)Run the entire application with a single command[span_12](end_span):
   ```bash
   docker-compose up --build
   
