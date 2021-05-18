import { promises as f } from 'fs';

import { Request, Response } from 'express';

import { Note } from '../interfaces/note';
import { addNote } from '../helpers/addNote';
import { jsonConverter } from '../helpers/json-converter';
import { JSON_FILE_PATH } from '../helpers/path';
import { getNotesFromJSONFIle } from '../helpers/storage/storage.helpers';

export const getNotes = async (req: Request, res: Response) => {
    try {
        const notes = await getNotesFromJSONFIle(JSON_FILE_PATH);
        res.json(notes);
    } catch (err) {
        res.status(500).json({ 
            ok: false,
            message: err
        });
    }
}

export const getNoteById = async (req: Request, res: Response) => {
    try {
        let notes = await getNotesFromJSONFIle(JSON_FILE_PATH);
        // if (notes === []) throw new Error('File Not Found');
        let note = notes.find(d => d.id === req.params.id)
        if (!note) throw new Error('Invalid ID');
        res.json(note);
    } catch (err) {
        res.status(500).json({ 
            ok: false,
            message: err
        });
    }
}

export const createNote =  async (req: Request, res: Response) => {
    try {
        const newNote: Note = req.body;
        let notes = await getNotesFromJSONFIle(JSON_FILE_PATH);
        addNote(notes, newNote);
        await f.writeFile(JSON_FILE_PATH, jsonConverter(notes));
        res.status(201).json({
            ok: true,
            message: 'Note created'
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: err
        })
    }
}

export const editNote = async (req: Request, res: Response) => {
    try {
        let updatedNode: Note;
        let notes = await getNotesFromJSONFIle(JSON_FILE_PATH);
        notes = notes.filter(d => d.id !== req.params.id);
        updatedNode = req.body;
        notes.push(updatedNode);
        await f.writeFile(JSON_FILE_PATH, jsonConverter(notes));
        res.json({
            ok: true,
            message: 'Note Edited'
        })
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: err
        })
    }
}

export const deleteNote = async (req: Request, res: Response) => {
    try {
        let data = await getNotesFromJSONFIle(JSON_FILE_PATH);
        data = data.filter(d => d.id !== req.params.id);
        await f.writeFile(JSON_FILE_PATH, jsonConverter(data));
        res.json({
            ok: true,
            message: 'Note Deleted'
        })
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: err 
        });
    }
}