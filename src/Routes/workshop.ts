import express from 'express';
import { workshopController } from '../controllers';

const router = express.Router();

router.post('/add', workshopController.add_workshop);
router.post('/edit', workshopController.edit_workshop_by_id);
router.delete('/delete/:id', workshopController.delete_workshop_by_id);
router.get('/all', workshopController.get_all_workshop);
router.get('/my-workshops', workshopController.get_my_workshops);
router.post('/purchase', workshopController.purchase_workshop);
router.get('/:id', workshopController.get_workshop_by_id);

export const workshopRoute = router;

