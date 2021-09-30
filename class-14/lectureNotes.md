# Lecture Notes

## review on url requests
- we have been using these three seperate properties of the request to send data to the server about our request
  - request.query
    - comes through at the end of the url indicated by a `?` followed by `key=value` pairs. Additional key/val pairs are seperated by `&`
  - request.params
    - sent through as additional path info on the url
    - we set the expectation for params when we call the app method (get, post, put, delete) using a wildcard `:` followed by a key for the value we will insert
    - example `app.get('/books/:id', handleGetBooks)` we are expecting that the client will make a request at `/books/112419` (or any id number) and then we will have a key value pair in the request.params object of id: 112419
  - request.body
    - this is another way of taking in data. We have been using json data in the body in our post and put requests to add or update resources in our database

## Auth
- 'authentication' - proving that your user is who they say they are and has permission to view/change/use your application including the data related to their account
- lots of ways to authenticate your users
- really common way is 'OAuth' which allows you to use another systems login confirmation to authenticate a user
- Auth0 (auth zero) is the one we will use this week
- it is costly and a huge liability to store users private information

## Auth0
- what is it?
  - an authentication platform
- why are we using it?
  - to securely authenticate a user
- how
  - on backend
    - use a jsonWebToken (jwt) to confirm authorization and access has granted for a period of time
    - the token comes in on the request header and then has to be verified
  on front end
  - npm i auth0-react
(more coming soon! Just want to get you what I have)

  
