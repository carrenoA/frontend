# Gantt SPA Frontend

A powerful visual prototype for a project management tool (Gantt) built with a minimalist and modern approach, prioritizing development speed and interactivity without the complexity of heavy frameworks.

## 🎯 Project Goals

- **Proactive Visualization**: Create an intuitive interface for task and schedule management.
- **SPA Experience**: Seamless navigation without page reloads using HTMX.
- **Lightweight Interactivity**: Reactive client-side logic with Alpine.js.
- **Premium Aesthetics**: Professional and "expensive" design using Tailwind CSS and modern typography.

## 🛠️ Tech Stack

### 🎨 Styling and Layout
- **Tailwind CSS**: Used for soft shadows, rounded corners (`rounded-2xl`), and a corporate color palette directly in the HTML.
- **Lucide Icons**: Clean, modern icons for "Dashboard", "Clients", and "Projects".
- **Inter (Google Fonts)**: The industry standard typeface for modern SaaS that makes the prototype look professional and "high-end".

### ⚡ Interactivity and SPA
- **HTMX**: For SPA navigation. Uses `hx-get` to load different views into a main container without page reloads.
- **Alpine.js**: Perfect companion for HTMX for logic that doesn't requires a server.
- **Hyperscript**: For quick animations.

### 📊 Specialized Components
- **Frappe Gantt**: One of the most beautiful and lightweight Gantt chart libraries. Supports drag-and-drop and visual date adjustments.
- **Chart.js**: For small dashboard charts (circular project progress, load distribution bars).

## 🚀 How to Run


1. **Install Dependencies and Run:**
   ```bash
   npm install
   npm run dev
   ```

2. **Open with Live Server**:
   - In VS Code, right-click `index.html` and select **"Open with Live Server"**.
   - Your browser will open the project (`http://127.0.0.1:5500`).

## 📜 Git Guidelines (Conventional Commits)

We follow the **Conventional Commits** specification for a clean and readable history.

| Type | When to use it | Version Impact |
| :--- | :--- | :--- |
| **feat** | When adding a new feature to the code (MINOR version). | `MINOR` |
| **fix** | When fixing an error or bug (PATCH version). | `PATCH` |
| **docs** | Changes only in the documentation (README, comments). | `N/A` |
| **style** | Changes that do not affect the meaning of the code (spacing, formatting, semi-colons). | `N/A` |
| **refactor** | Code changes that neither fix a bug nor add a feature (logic improvement). | `N/A` |
| **perf** | A code change that improves performance. | `PATCH` |
| **test** | Adding missing tests or correcting existing ones. | `N/A` |
| **chore** | Routine tasks that do not affect source code (updating dependencies, build configs). | `N/A` |
