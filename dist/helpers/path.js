"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENCODING = exports.JSON_FILE_PATH = void 0;
var path_1 = __importDefault(require("path"));
exports.JSON_FILE_PATH = path_1.default.join(__dirname, '../../../notes.json');
exports.ENCODING = 'utf8';
