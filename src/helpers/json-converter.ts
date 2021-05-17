import { Note } from '../interfaces/note';

export const jsonConverter = (notes: Array<Note>): string => {
    return JSON.stringify({
        data: notes
    });
};