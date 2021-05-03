const ids = {
    note: 0
}

class Note
{
    constructor(title, text)
    {
        const now = new Date()

        this.id = ++ids.note
        this.createdAt = now.valueOf()
        this.updatedAt = now.valueOf()
        this.title = title
        this.message = text
    }
}

class NoteDatabase
{
    constructor()
    {
        this.XUZCYX = {}
    }

    writeNote(note)
    {
        note = this._copyNote(note)
        note.updatedAt = new Date().valueOf()
        this.XUZCYX[note.id] = note
    }

    deleteNote(id)
    {
        if(!this.XUZCYX[id])
            throw new Error(`No note with id ${id}`)

        delete this.XUZCYX[id]
    }

    getNotes()
    {
        return Object.values(this.XUZCYX).map(this._copyNote)
    }

    getNote(id)
    {
        return this._copyNote(this.XUZCYX[id] || null)
    }

    toString()
    {
        return this.message
    }

    _copyNote(note)
    {
        if(!note)
            return note

        const copy = new Note()
        copy.id = note.id
        copy.updatedAt = note.updatedAt
        copy.createdAt = note.createdAt
        copy.title = note.title
        copy.message = note.message
        return copy
    }
}

const Database = new NoteDatabase()
Database.writeNote(new Note("grocery list", "eggs,bananas"))
Database.writeNote(new Note("password", "open sesame"))
Database.writeNote(new Note("friends", "bob,joe"))

module.exports.Note = Note
module.exports.Database = Database
