"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var notes_controller_1 = require("../controllers/notes.controller");
var router = express_1.Router();
router.get('/', notes_controller_1.getNotes);
router.get('/:id', notes_controller_1.getNoteById);
router.post('/', notes_controller_1.createNote);
router.put('/:id', notes_controller_1.editNote);
router.delete('/:id', notes_controller_1.deleteNote);
exports.default = router;
