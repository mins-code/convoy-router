# DefLogis: AI Convoy Command

AI-Powered Intelligent Convoy Routing & Movement Management System. Features tactical dashboards, route optimization via Gemini AI, and real-time fleet monitoring.

## 🚀 Key Features

The **AI Convoy Command** system provides an end-to-end solution for military and defense logistics, focusing on speed, security, and smart routing powered by Google's Gemini API.

* **AI-Powered Route Optimization (`RoutePlanner.tsx`):**
    * Utilizes the `gemini-2.5-flash` model to perform strategic analysis on requested routes.
    * Generates a detailed **Route Analysis** including estimated duration, checkpoint sequence, and strategic notes.
    * Assigns a crucial **Risk Level** (`LOW`, `MEDIUM`, `HIGH`) to inform deployment decisions.
* **Real-time Command Center (`Dashboard.tsx`):**
    * A centralized hub showing key metrics like **Active Units** and current **Threat Level** (e.g., `MODERATE`).
    * Displays a live **Intel Feed** for immediate alerts (`CRITICAL`, `WARNING`, `INFO`).
    * Visualize route efficiency with a **Traffic vs. Velocity** area chart.
* **Live Fleet Tracking (`LiveTracking.tsx`):**
    * Detailed, selectable tracking of active convoys (e.g., `CV-ALPHA-01`, `CV-BRAVO-09`).
    * Displays real-time unit telemetry, including speed, vehicle count, and ETA.
    * Visualizes movement status (`MOVING`, `DELAYED`, `REROUTING`) on an embedded map.
* **Secure System Monitoring (`SecurityLogs.tsx`):**
    * A dedicated view for the system's **Audit Trail** / **SECURITY LOGS**, tracking events like `AUTH_SUCCESS` and `UNAUTHORIZED_PING`.
    * Displays current **Encryption Status** (AES-256-GCM) and **Intrusion Detection** status.
* **Role-Based Access Control (RBAC):**
    * Supports three core roles: `COMMANDER`, `LOGISTICS_OFFICER`, and `FIELD_AGENT`.
    * Access to sensitive views like **SECURITY LOGS** is restricted (e.g., only visible to `COMMANDER`).

## 🛠️ Tech Stack

This application is built as a single-page application using modern web technologies:

* **Frontend Framework:** React.js
* **Language:** TypeScript
* **AI Integration:** `@google/genai` SDK
* **Styling:** Tailwind CSS (utility-first approach)
* **State Management:** React Hooks (`useState`)
* **Visualization:** `recharts` for data charting
* **Utilities:** `lucide-react` (Icons), `framer-motion` (Animations)

## ⚙️ Installation & Setup

Follow these steps to get the project running locally.

### Prerequisites

* Node.js (LTS recommended)
* A valid **Gemini API Key** from Google AI Studio.

### Steps

1.  **Clone the Repository**
    ```bash
    git clone [repository-url]
    cd [repo-name]
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    The application requires a Gemini API Key to use the route optimization feature.
    * Create a file named `.env.local` in the project root directory.
    * Add your API key to the file:
        ```
        GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
        ```
    * *Note: The application uses `vite.config.ts` to expose this key as `process.env.GEMINI_API_KEY` for the `geminiService.ts`.*

4.  **Run the Application**
    ```bash
    npm run dev
    ```

The application should now be running and accessible, typically at `http://localhost:3000`.

## 🧑‍💻 Usage

You can log in using mock credentials to view the dashboard:

| Role | Personnel ID | Clearance Level |
| :--- | :--- | :--- |
| **COMMANDER** | `CMD-8921` | 5 |
| **LOGISTICS OFFICER** | `LOG-4421` | 3 |

Navigate to the **ROUTE OPS** tab to use the `RoutePlanner` and initiate an AI-driven analysis.
