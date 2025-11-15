import express from 'express';
import { legalityController } from '../controllers';

const router = express.Router();

router.post('/add', legalityController.add_legality);
router.post('/edit', legalityController.edit_legality_by_id);
router.get('/all', legalityController.get_all_legality);
router.get('/type/:type', legalityController.get_legality_by_type);
router.get('/:id', legalityController.get_legality_by_id);

export const legalityRoute = router;

