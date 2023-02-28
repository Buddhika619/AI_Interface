"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpt3Func = exports.dellEfunc = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const openai_1 = require("../config/openai");
// @des  Email body
// @route POST /api/ai/gpt
// @access private
const gpt3Func = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, openai_1.generator)('text-davinci-003', req.body.text, 1, 250, 2);
    res.json(result);
}));
exports.gpt3Func = gpt3Func;
// @des  Email body
// @route POST /api/ai
// @access private
const dellEfunc = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, openai_1.imageGenerator)(req.body.text, 10);
    res.json(result);
}));
exports.dellEfunc = dellEfunc;
