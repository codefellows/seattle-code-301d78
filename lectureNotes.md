# Lecture Notes

## REACT
- to make a new application in terminal: npx create-react-app `name`
- react uses mark-up called **jsx** that is converted to javascript which writes to the dom.
- React is great because it gives us dynamic updates based on application state
- organized by modular building blocks called **components**

### State
- a core set of values that represents the essence of the application
- the current values of data that the application has

### Components
- named with a capitol letter
- must return something that can be rendered
- we will create our components using JS classes
- components must return one parent element - can have lots a stuff within that parent element
  - commonly a div `<div></div>`, a react fragment `<></>`, or a set of parens `()`
- to insert a component into your application use it as though it was a self closing react element `<Header />`
- state can be passed into components as props
- components typically live in their own file named with a capitol letter in react

### import 
- use the import keyword followed by the thing you want to import `from` a file
- if we are importing from a library, not a file, react will look in your node-modules for the code
- create-react-app installs a bunch of libraries for us... check out your node-modules to see all of these libraries


``` js
import { Component } from 'react';

class Header extends Component {

  render( {
    return <></>
  })

}
```

### props
- the mechanism for passing things around from parent to child in react
- passes as an attribute in the parent component
  - `<Main message={'Hi there'}>`
  - the curly braces injects an expression
- recieved as props by the child
  - `<h1>{this.props.message}</h1>`
  - we use the contextual this to refer to the props object that belongs to 'this' instance of the class

### export
- we must make our component available to other files by exporting it
- `export default Header;`

## Syncing your REACT-APP with github.com
- create-react-app makes you a git repository locally but we have to establish it on github.com
- create a new repository
- name it the same as your react app to make it less confusing (optional)
- skip adding the readme, gitignore, and license
- push the green create repository button
- 'push an existing repository from the command line'
- copy the code and paste it in your terminal after you do your inital commit
