# Lecture Notes

## Database
- we will be using mongo locally and hosted on Atlas
  - mongo is a non-relational db structure
  - when we host our mongo db locally it is stored in a file in your computers system files

### Mongoose
- an odm for Mongo
- mongoosejs.com
- npm i mongoose
- `const mongoose = require('mongoose');`
- `mongoose.connect('mongodb://localhost:27017/test');`
- define the shape of a resource using a model
  - `const Cat = mongoose.model('Cat', { name: String })`
- create instances of a model
  - `const kat = new Cat({name: 'Kat'});`
  - can use a schema to define a model if you have a more involved model
- save the resource to your db
  - `kat.save().then(() => console.log('meow'));`

#### Seed the DB
- a script that starts your database with initial values

#### Retrieve data from your db
- `const cats = await Cat.find({});`
- empty object will retrieve all cat entries


