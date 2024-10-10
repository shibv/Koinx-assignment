import express from 'express';
import {getDeviation} from '../controllers/deviation.controller.js'

const router = express.Router();

router.get('/',getDeviation);

export default router;