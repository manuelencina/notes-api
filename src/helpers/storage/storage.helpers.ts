import { promises as f } from 'fs';

import { JSON_FILE_PATH } from '../path';
import { Note } from '../../interfaces/note';

export const getNotesFromJSONFIle = async (path: string, enconding: string): Promise<Note[] | any[]> => {
    try {
        let data: Array<Note> = []
        const jsonFIle = await f.readFile(JSON_FILE_PATH, 'utf8');
        const jsonObject = JSON.parse(jsonFIle);
        data = jsonObject.data;
        return data;
    } catch (error) {
        return [];
    }
};