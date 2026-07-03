# Login & Profile using Context API

A simple React project demonstrating how to use the Context API to share state between components without prop drilling.

The project contains two independent contexts:

- **Login Context** – Manages login form state (email, password, login function, and username).
- **Profile Context** – Displays the logged-in user's information by consuming shared state from context.

After entering both email and password and clicking **Login**, the application updates the username and displays it inside the Profile component.

## Features

- React Context API implementation
- Custom hooks for consuming context
- Separate contexts for different responsibilities
- Shared state without prop drilling
- Simple login demonstration
- Beginner-friendly project structure
- Functional components with React Hooks

## Concepts Covered

- `createContext()`
- `Context.Provider`
- `useContext()`
- Custom Hooks
- `useState()`
- Sharing state between sibling components
- Avoiding prop drilling
- Context separation for better maintainability

## Tech Stack

- React
- JavaScript (ES6+)
- Vite

## Installation

```bash
git clone git@github.com:AnkushSaral/React-Learning.git

cd .\concepts\login-profile-contextAPI\

npm install

npm run dev
```

## How It Works

1. The Login component updates the email and password using the Login Context.
2. Clicking the **Login** button validates the inputs.
3. If both fields contain values, a username is stored in shared state.
4. The Profile component reads the username from the Profile Context and displays it.
5. No props are passed between the Login and Profile components.

## Learning Outcomes

This project helps you understand:

- Why Context API exists
- When to use Context instead of props
- Creating multiple contexts
- Writing reusable custom hooks
- Managing shared application state in React

## Author

**Ankush Saral**