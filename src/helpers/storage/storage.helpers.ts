import { promises as f } from 'fs';

import { JSON_FILE_PATH } from '../path';
import { Note } from '../../interfaces/note';

export const getNotesFromJSONFIle = async (path: string): Promise<Note[] | any[]> => {
    try {
        let data: Array<Note> = []
        const jsonFile = await f.readFile(path, 'utf8');
        const jsonObject = JSON.parse(jsonFile);
        data = jsonObject.data;
        return data;
    } catch (error) {
        return [];
    }
};