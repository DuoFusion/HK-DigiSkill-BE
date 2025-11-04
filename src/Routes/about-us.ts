import express from 'express';
import { aboutUsController } from '../controllers';

const router = express.Router();

router.post('/add', aboutUsController.add_about_us)
router.post('/update/:id', aboutUsController.update_about_us)
router.get('/get', aboutUsController.get_about_us)

export const aboutUsRoutes = router;
