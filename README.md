# Rest API Interview

## Install

 * npm install
 * npm run start

## Instructions
Create an express API for a note taking app.

The API should allow the user to do the following:

 * Create a new note
 * Update a notes title
 * Update a notes message
 * Delete a note
 * Get a note by id
 * Get all notes

Here is an example of how to use the note taking database.
```js
const {Database, Note} = require('./database.js')
const note = new Note("grocery list", "eggs,bananas")
Store.writeNote(note)
console.log(Database.getNote(note.id).message)
```
