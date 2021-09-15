# Lecture Notes

## More State and Props
- we can get around the ability to only effect state/props in a parent to child direction by passing methods to props that can be called in the child with the effect of changing state in the parent
- if state is displayed in the browser and it changes React will automatically rerender it

## Misc react
- onClick takes in a callback function, but if you need to pass in an argument to the callback you have to feed it through as an arrow function so the function is not immedialy run on page load... but instead waits for the click to occur