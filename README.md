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

# What is `React Fiber`?
React fiber is a complete rewrite of react that fixes a few long-standing issues and offers incredible and offers opportunities heading into the future. Goals of React Fiber: Fiber focuses on animations and responsiveness. It has the ability to split work into chunks and prioritize tasks.

 ## Reconciliation versus rendering
 The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)

 The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

 This separation means that React DOM and React Native can use their own renderers while sharing the same reconciler, provided by React core.

 Fiber reimplements the reconciler. It is not principally concerned with rendering, though renderers will need to change to support (and take advantage of) the new architecture.

 ## Scheduling
 
  ### scheduling
 the process of determining when work should be performed.
  ### work
 any computations that must be performed. Work is usually the result of an update (e.g. setState).

 # when 'useEffect ' is called ?
    - when no dependency array is there , use effect is called every time the component renders.
    - when empty dependecny is there .. use effect is called only once , when the component loads.
    - when we pass any dependency the use effect is called whenever the dependency changes.


# why do we use super(props) in constructor ?

- The super(props) function is used in the constructor of a React component to call the constructor of the parent component. This is necessary because React components are subclasses of the React.Component class, and the constructor of the parent component must be called in order to initialize the component properly.
- In addition to calling the constructor of the parent component, the super(props) function also passes the props object to the parent component. This allows the parent component to access the props object and use it to initialize its own state.
- The super(props) function is an important part of React components. It allows components to inherit the properties and methods of their parent components, and it also allows components to access the props object.
- By using super(props), we ensure that the constructor props are correctly passed to the parent constructor, allowing us to access this. props inside the constructor and other methods of the React class component.


<!-- Lifting state UP feature in react. -->


# What is Prop Drilling ?

- Prop drilling is a fundamental concept in React that involves passing data down through nested components in a React application. It plays a crucial role in maintaining communication between parent and child components within the component tree.
- However, excessive prop drilling can lead to several challenges, including:
 ### Increased cognitive load:
 - Prop drilling can make it difficult for developers to keep track of which components are passing which data and where that data is being used. This can be especially challenging in large and complex applications.
### Code redundancy:
 - Prop drilling can lead to code redundancy, as the same data may be passed down through multiple levels of components. This can make the code more difficult to maintain and update.
### Performance overhead:
- In some cases, prop drilling can lead to performance overhead, as React needs to re-render components whenever their props change.
## To avoid prop drilling, there are a few techniques that developers can use:
### Context API:
- The Context API provides a way to share data between components without having to pass it down through props. This can be useful for sharing data that is needed by many components throughout the application.
### State management libraries:
 - State management libraries, such as Redux and MobX, provide a centralized way to manage application state. This can help to reduce prop drilling by making data available to all components that need it, regardless of their location in the component tree.
### Render props:
 - Render props is a technique that allows developers to pass a function to a child component that will be responsible for rendering the child component's output. This can be useful for passing data to child components without having to use props.
 - By using these techniques, developers can avoid prop drilling and create React applications that are more maintainable, performant, and easier to understand.
## Here are some additional tips for avoiding prop drilling:
  ### Identify the data that needs to be shared:
  - The first step is to identify the data that needs to be shared between components. Once you have identified the data, you can determine the best way to share it.
  ### Use the Context API for global data:
  - If the data needs to be shared by many components throughout the application, you can use the Context API. The Context API provides a way to share data without having to pass it down through props.
### Use state management libraries for complex data:
- If the data is complex or needs to be updated frequently, you can use a state management library, such as Redux or MobX. State management libraries provide a centralized way to manage application state, which can help to reduce prop drilling.
### Use render props for custom rendering logic:
- If you need to pass data to a child component and you also need to control how the child component is rendered, you can use render props. Render props allows you to pass a function to a child component that will be responsible for rendering the child component's output.

 # Preview
![Home page](https://github.com/Ankii-Sing/React-Project/assets/100915008/1398fa9e-423b-4fdf-9dac-bd63f0fbd052)


## 🔥 Clone this Repository

You need to write the following commands on the terminal screen(in vscode) so that you can run this project locally.

```bash
  git clone "https://github.com/Ankii-Sing/React-Project.git"
```

Go to the project directory

```bash
  cd React-Project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
