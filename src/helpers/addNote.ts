import { v4 } from 'uuid';

import { Note } from '../interfaces/note';

export const addNote = (notes: Array<Note>, newNote: Note) => {
    while (true) {
        let uuid = v4();
        const uuidChecker: boolean = notes.some(note => note.id === uuid);
        if (!uuidChecker || notes.length === 0) {
            notes.push({
                id: v4(),
                title: newNote.title,
                state: newNote.state,
                description: newNote.description
            });
            break;
        }
    }
};