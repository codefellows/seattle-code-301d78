# Lecture Notes

## React Bootstrap
- gives you a lot for a little - can look a bit generic because so many people use it
- in your project root install react bootstrap using the npm command on the react-bootstrap docs
- to use components import them in the file you want to use them in using the code supplied in the docs example: `import Button from 'react-bootstrap/Button';`
- then use the Button element in your component `<Button />`
- you can explore all of the components available to you in the docs and look at the supplied examples for usage
- add the minnified css file import to your index.ja or app.js

## JSON data in React
- can be imported from another file within application to whatever file you need it in

## React misc
- can't render an object in react, have to render the properties/ more primative datatypes 

## Adding event handling to React
- use the jsx event listener `onClick={ this.handleClick }`;
- write an event handler function that utilizes an arrow funtion notation and takes in an event

## State in React Class Components
- make a constructor and pass props in using the **super** keyword
- create a propert `this.state = {}` and put some property with a value within the state object
- you must use the setState method to change the state object property you want to change `setState({ propertyName: 'some new value' });