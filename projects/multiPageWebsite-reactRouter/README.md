# React Router Learning Project

A practice project built while learning React Router. The application demonstrates routing, nested layouts, dynamic route parameters, navigation links, and route loaders using modern React Router APIs.

## Overview

This project was created to understand how routing works in React applications. It covers both static and dynamic routes, shared layouts using `Outlet`, route-based data fetching with loaders, and navigation using `Link` and `NavLink`.

## Concepts Practiced

* React Router DOM
* Browser Router Configuration
* Nested Routes
* Shared Layouts
* Outlet Component
* Link and NavLink
* Dynamic Route Parameters
* Route Loaders
* useLoaderData Hook
* useParams Hook
* Component Reusability
* Tailwind CSS Integration

## Features

### Shared Layout

A common layout is used across all pages consisting of:

* Header
* Main Content Area
* Footer

The content is rendered using React Router's `Outlet` component.

### Navigation

The project uses:

* `Link` for navigation
* `NavLink` for active route styling

### Dynamic Routing

A dynamic route has been implemented to understand URL parameters.

Example:

```text
/post/react-router
/post/javascript
/post/learning-react
```

The route parameter is accessed using the `useParams()` hook.

### Route Loaders

The GitHub page demonstrates React Router loaders.

Before rendering the page:

1. The loader fetches data from the GitHub API.
2. The data is returned from the loader.
3. The component accesses the data using `useLoaderData()`.

This approach avoids fetching data inside `useEffect` and keeps data loading tied to the route.

## Routes

| Route             | Description                  |
| ----------------- | ---------------------------- |
| `/`               | Home Page                    |
| `/about`          | About Page                   |
| `/contact`        | Contact Page                 |
| `/github`         | GitHub API Data using Loader |
| `/post/:postname` | Dynamic Route Example        |

## Technologies Used

* React
* React Router DOM
* Tailwind CSS
* Vite

## Installation


```bash
git clone git@github.com:AnkushSaral/React-Learning.git

cd .\projects\multiPageWebsite-reactRouter\

npm install

npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```


## Project Purpose

The primary goal of this project is to gain hands-on experience with React Router and understand how modern React applications handle navigation, layouts, route parameters, and route-level data fetching.

## Author

Ankush Saral

GitHub: https://github.com/AnkushSaral

## License

This project is licensed under the MIT License.
