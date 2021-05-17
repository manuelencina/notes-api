"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = void 0;
var uuid_1 = require("uuid");
var addNote = function (notes, newNote) {
    var _loop_1 = function () {
        var uuid = uuid_1.v4();
        var uuidChecker = notes.some(function (note) { return note.id === uuid; });
        if (!uuidChecker || notes.length === 0) {
            notes.push({
                id: uuid_1.v4(),
                title: newNote.title,
                state: newNote.state,
                description: newNote.description
            });
            return "break";
        }
    };
    while (true) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
};
exports.addNote = addNote;
