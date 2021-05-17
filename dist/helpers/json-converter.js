"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonConverter = void 0;
var jsonConverter = function (notes) {
    return JSON.stringify({
        data: notes
    });
};
exports.jsonConverter = jsonConverter;
