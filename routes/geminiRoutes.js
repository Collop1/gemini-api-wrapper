import express from 'express';
import GeminiController from '../controllers/GeminiController.js';
import { promptValidator } from '../validators/promptValidator.js';

const router = express.Router();
const controller = new GeminiController();

router.post('/', promptValidator, controller.generateContent);

export default router;