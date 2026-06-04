# useState Hook in React

## What is useState?

`useState` is a React Hook that allows functional components to store and manage data (state).

When the state changes, React automatically re-renders the component and updates the UI.

---

## Importing useState

```jsx
import { useState } from "react";
```

---

## Basic Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Breakdown

- `state` → Current value of the state.
- `setState` → Function used to update the state.
- `initialValue` → Initial value when the component first renders.

Example:

```jsx
const [count, setCount] = useState(0);
```

- `count` starts at `0`.
- `setCount()` updates the value.

---

## Example: Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </>
  );
}

export default Counter;
```

---

## State Update Flow

1. Component renders.
2. State is initialized.
3. User interacts with the UI.
4. `setState()` is called.
5. React updates the state.
6. Component re-renders.
7. Updated value appears on the screen.

---

## useState with Strings

```jsx
const [name, setName] = useState("Ankush");
```

Updating:

```jsx
setName("John");
```

Example:

```jsx
function App() {
  const [name, setName] = useState("Ankush");

  return (
    <>
      <h1>{name}</h1>

      <button onClick={() => setName("John")}>
        Change Name
      </button>
    </>
  );
}
```

---

## useState with Boolean Values

Useful for show/hide functionality.

```jsx
const [isVisible, setIsVisible] = useState(false);
```

Example:

```jsx
function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>

      {isVisible && <p>Hello React!</p>}
    </>
  );
}
```

---

## useState with Input Fields

```jsx
function App() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>{text}</p>
    </>
  );
}
```

This creates a controlled input.

---

## useState with Arrays

```jsx
const [todos, setTodos] = useState([]);
```

Adding an item:

```jsx
setTodos([...todos, "Learn React"]);
```

Example:

```jsx
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <>
      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
```

---

## useState with Objects

```jsx
const [user, setUser] = useState({
  name: "Ankush",
  age: 25,
});
```

Updating one property:

```jsx
setUser({
  ...user,
  age: 26,
});
```

Example:

```jsx
function App() {
  const [user, setUser] = useState({
    name: "Ankush",
    age: 25,
  });

  return (
    <>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>

      <button
        onClick={() =>
          setUser({
            ...user,
            age: user.age + 1,
          })
        }
      >
        Increase Age
      </button>
    </>
  );
}
```

---

## Important Rules

### 1. Never Update State Directly

❌ Wrong

```jsx
count = count + 1;
```

✅ Correct

```jsx
setCount(count + 1);
```

---

### 2. State Updates Trigger Re-renders

```jsx
setCount(10);
```

React re-renders the component with the new value.

---

### 3. State is Component-Specific

Each component gets its own copy of state.

```jsx
<Counter />
<Counter />
```

Both counters maintain separate values.

---

## Functional State Updates

Useful when the new value depends on the previous value.

```jsx
setCount((prevCount) => prevCount + 1);
```

Example:

```jsx
setCount((prev) => prev + 1);
```

Recommended when updating counters.

---

## Common Beginner Mistakes

### Forgetting to Import useState

```jsx
import { useState } from "react";
```

---

### Updating State Directly

❌

```jsx
count++;
```

✅

```jsx
setCount(count + 1);
```

---

### Mutating Arrays or Objects

❌

```jsx
todos.push("Learn React");
```

✅

```jsx
setTodos([...todos, "Learn React"]);
```

---

## Quick Summary

- `useState` stores data inside a component.
- Changing state updates the UI.
- State can hold:
  - Numbers
  - Strings
  - Booleans
  - Arrays
  - Objects
- Use the setter function to update state.
- Never mutate state directly.
- State changes cause React to re-render the component.

---

## Practice Projects

1. Counter App
2. Show/Hide Text
3. Like Button
4. Character Counter
5. Color Changer
6. Todo List
7. Shopping Cart Counter
8. Simple Calculator
9. Quiz App
10. Notes App