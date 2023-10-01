### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is Javascript framework. It's used for enabling faster code development and more organized code among other reasons.

- What is Babel?
  - Babel enables written code in modern Javascript to be translated into older versions of Javascript for browser compatibility.

- What is JSX?
  - JSX is the file type used when writing React pages and components. It allows HTML to entered into Javascript.

- How is a Component created in React?
  - React uses a virtual DOM which takes in the react component and translates it into plain Javascript by creating Javascript DOM commands (createElement, etc) using a webpack tool.

- What are some difference between state and props?
  - If data will ever need to change, it must be a state and not a prop
- What does "downward data flow" refer to in React?

- What is a controlled component?
  - Input, textArea, and other basic form elements are controlled components. They can be set and maintained by state.

- What is an uncontrolled component?
  - Any form that is uncontrolled by react, ie from a outside library. The form state is maintained by an outside library. 

- What is the purpose of the `key` prop when rendering a list of components?
  - React needs to differentiate between all the different duplicate pieces of JSX and needs a key prop to do so.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - Because array index can change based on array manipulation, making it a unstable key

- Describe useEffect.  What use cases is it used for in React components?
  - useEffect tells react to rerender based on a value or multiple values changing. Its used in data fetching, timers, etc. It fires on page load and every change afterwards.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - useRef takes in a value and it makes it independant of state. Changing the value doesn't trigger a rerender.

- When would you use a ref? When wouldn't you use one?
  - When accessing dom elements or settings/timers. You wouldn't want to use it when needing a property that should trigger a rerender.

- What is a custom hook in React? When would you want to write one?
  - A custom hook is a hook that is not included in the react library, so it has to be built by the developer. It will typically start with the word "use".
  - You would want to build your own hook when you need some data call or a jsx creation piece that needs to be repeatable and reusable. 
