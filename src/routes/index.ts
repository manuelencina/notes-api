import { Router } from 'express';

import { createNote, getNotes, editNote, deleteNote, getNoteById } from '../controllers/notes.controller';

const router: Router = Router();

router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);
router.put('/:id', editNote);
router.delete('/:id', deleteNote);

export default router;