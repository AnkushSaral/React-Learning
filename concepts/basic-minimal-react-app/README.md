# Basic Minimal React App

A minimal React application created using Vite with all non-essential files removed.

## Purpose

This project demonstrates the smallest possible setup required to run a React application with Vite. It is intended for learning and understanding the core structure of a React app without any extra configuration or boilerplate.

## What Was Removed?

The default Vite React template includes several files and folders that are useful for development but are not strictly required for a basic React application.

The following were removed:

* `public/` folder
* `vite.svg`
* `src/assets/`
* `src/App.css`
* `src/index.css`
* Unused images and assets
* Default Vite starter content

## Remaining Structure

```text
basic-minimal-react-app/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Core Files

### `index.html`

The entry HTML file that contains the root element where React mounts the application.

### `src/main.jsx`

The React entry point responsible for rendering the root component.

### `src/App.jsx`

The main React component containing the application UI.

## Installation

Install dependencies:

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Learning Outcome

This project helps understand:

* Minimum files required for a React application
* How React is mounted to the DOM
* The role of `main.jsx`
* The role of `App.jsx`
* How Vite serves and builds React applications
* Which files are optional in a React project

## Note

Even after removing CSS files, assets, and the public folder, React continues to work correctly because only a small set of files are required for a functional React application.
