"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aiController_1 = require("../controllers/aiController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// router.post('/', random)
router.post('/', aiController_1.dellEfunc);
router.post('/gpt', aiController_1.gpt3Func);
exports.default = router;
