# what is npm ? 

npm is a package manager and software register that allows developers to find, build, and manage code packages for JavaScript applications. It's the standard package manager for Node.js, the JavaScript runtime environment.

Npm has over 1.3 million packages, which are being used by more than 11 million developers across the world. These packages are available for public use, and projects available on the npm registry are called “packages”.

- The World's Largest Software Registry (Library)
- npm is the world's largest Software Registry.
- The registry contains over 800,000 code packages.
- Open-source developers use npm to share software.
- Many organizations also use npm to manage private development.


# what is root in React ?
In react the root element refers to the top level element  that is parent of all other components in your application .It is Typically represented as a DOM node within the Public/index.

# JSX
JSX is converted/Transpiled to ReactElement i.e(JS Object) and then rendred as HTML tags. This conversion is done by the Bable used by the parcel available in node_module. 

# what is Export default?

In JavaScript, the export default keyword is used to export a single value, function, or class from a module as the default export. This means that when another module imports the module with the default export, it will automatically get the default value.

example:
```javascript 
// greetings.js
const greeting = "Hello, world!";
export default greeting;
``` 
In this example, we are exporting the variable greeting as the default export.
Now, let's see how to import the default export from another module:

```javascript 
// main.js
import greeting from "./greetings";

console.log(greeting); // "Hello, world!"
``` 
In this example, we are importing the default export from the greetings.js module and assigning it to the variable greeting. We can then use the greeting variable as if it were declared in the current module.

Default exports are useful when you want to export a single value, function, or class from a module as the main thing. This can make it easier to import and use the exported value in other modules.

# two types of export and import

- Default export/import
    - export default component;
    - import component from "./location"

- Named export/import
    - export const name ;
    - export const age;
    - import {name} from "./location";
 
#

# Why do we need `useState Hook`?

What is the useState Hook? useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

# What are `React Hooks`?
Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Although Hooks generally replace class components, there are no plans to remove classes from React.         
 - Before hooks, you could only use state inside class components. Hooks let you use state in function components, which makes your code more concise and easier to read.
 - With hooks, you can easily extract reusable logic into custom hooks. This makes your code more modular and easier to maintain.

 # Is `JSX` mandatory for React?
No, JSX is not mandatory for React. You can write React applications without using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

JSX is a JavaScript extension that allows you to write HTML in your JavaScript code. It makes it easier to create and manage complex UIs, and it can also help you to write more readable and maintainable code.

# What is `<React.Fragment></React.Fragment>` and `<></>`?
React.Fragment and <></> are both ways to create a fragment in React. A fragment is a way to group multiple elements together without adding an extra node to the DOM. This can be useful when you want to return multiple elements from a component, or when you want to group elements together for styling purposes.

React.Fragment is the more explicit way to create a fragment. You simply wrap the elements you want to group in a <React.Fragment> tag. For example:
```javascript
const MyComponent = () => {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>World!</p>
    </React.Fragment>
  );
};
```
The shorter syntax, <></>, is a newer way to create fragments. It was introduced in React 16.2. To use it, you simply wrap the elements you want to group in empty tags.Both of these syntaxes produce the same result:

```javascript
<h1>Hello</h1>
<p>World!</p>
```

# What is `Reconciliation` in React?
React uses a virtual DOM to keep track of the state of the UI. When a component's state changes, React updates the virtual DOM. Then, it compares the virtual DOM to the real DOM and updates the real DOM only when necessary. This process is called reconciliation.
Reconciliation is an important part of React because it makes the UI updates very efficient. Without reconciliation, React would have to re-render the entire UI every time a component's state changes. This would be very slow and would make the UI unresponsive.