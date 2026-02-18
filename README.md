# Support Ticket System with AI Classification

## Setup Instructions
1.  Clone this repository.
2.  Create a `.env` file in the root directory and add:
    `GEMINI_API_KEY=your_actual_key_here`
3.  Run the application with:
    ```bash
    docker-compose up --build
    ```

## Technical Decisions
- **[span_3](start_span)LLM Choice:** Google Gemini (gemini-pro) was selected for its high speed and reliable JSON output, ensuring smooth auto-classification[span_3](end_span).
- **[span_4](start_span)Database Logic:** As required, the `/stats/` endpoint uses **Django ORM aggregation** (not Python loops) to ensure performance[span_4](end_span).
- **[span_5](start_span)Infrastructure:** The app is fully containerized using Docker to meet the "single command" requirement[span_5](end_span).
- 
