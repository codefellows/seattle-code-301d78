# Lecture Notes

## CRUD
- create
- read
- update
- delete

### route methods
- get (read)
- post (create)
- put (update)
- delete (delete)

## POST
- recieve information from the client via the request.body
- body content should be an object in json
- keys and values are in string type
- you need middleware to accept the json packet from the body
  - `app.use(express.json());`
- use mongoose create or save to make a new db entry with the data

## DELETE
- the path should have a wildcard given using a colon and some key
  - `app.delete('/cats/:id', handleDeleteCats);`
- we look for the params to know which item to delete
  - `request.params.id`
- the route would have the id number after the `/cats/` when you hit it with a delete request `http://localhost:3001/cats/10052`
- use a mongoose method like `.findByIdAndDelete()` to remove the entry with the correct id

