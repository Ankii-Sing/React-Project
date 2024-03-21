# what is npm ? 

npm is a package manager and software register that allows developers to find, build, and manage code packages for JavaScript applications. It's the standard package manager for Node.js, the JavaScript runtime environment.

 Npm has over 1.3 million packages, which are being used by more than 11 million developers across the world. These packages are available for public use, and projects available on the npm registry are called “packages”.

### The World's Largest Software Registry (Library)
### npm is the world's largest Software Registry.
### The registry contains over 800,000 code packages.
### Open-source developers use npm to share software.
### Many organizations also use npm to manage private development.


# what is root in React ?
 -> In react the root element refers to the top level element  that is parent of all other components in your application .It is Typically represented as a DOM node within the Public/index.

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

-Default export/import

export default component;
import component from "./location"

- Named export/import
export const name ;
export const age;
import {name} from "./../..location";