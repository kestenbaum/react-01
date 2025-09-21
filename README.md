# My Todo App
A simple Todo project built with React + Vite and Axios for API requests.

## Tech Stack
- React 18
- Vite
- Axios
- TypeScript
- CSS Modules

## Installation
Clone the repository:
git clone https://github.com/kestenbaum/react-01.git
cd react-01

Install dependencies:
npm install

## Running the Project
Start the development server:
npm run dev

The app will be available at: http://localhost:5173

## API
Using JSONPlaceholder (https://jsonplaceholder.typicode.com) for mock data.

### Available API functions
- fetchTodos() — get list of todos

API requests are handled via Axios instance (src/api/instance.ts).

## Project Structure
src/
 ├─ api/             # Axios instance and API functions
 ├─ components/      # Reusable UI components
 ├─ features/        # Feature-specific logic (TodoList)
 ├─ types/           # TypeScript types
 ├─ App.tsx
 └─ main.tsx

