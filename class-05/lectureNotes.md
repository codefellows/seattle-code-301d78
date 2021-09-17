# Lecture Notes

### preview of next week
- a city explorer application using api data to supply data about a searched city
- important concepts
  - in react we have single page (multi component) applications
  - WRRC web request response cycle
    - reach out and make a request for data, get a response back and render the info

## React Router
- https://reactrouter.com/web/guides/quick-start
- we are able to have a multi page VIEW on a single page by utilizing the react-router-dom
- we can import the BrowserRouter, Switch, and/or Route as needed from the 'react-router-dom'
- Router is a component, aka a special type of 'function', that does stuff with other components... a **higher order component** 
- it modifies the behavior of the components it houses by looking for **Switch** component... within Switch it looks for **Routes**
- Routes have paths which specify url end-points where components will be rendered
  - router will take you to the first page that matches your path so either put them in an order that won't allow confusion or use the react keyword
  - a path of '/' will take you to any other matches that you didn't specify higher up in your code
- any components outside the switch are static to every route
- **Link** is another component you can import from 'react-router-dom' that you can use to take the user to other paths within your app
  - Typically you will find link in a nav component