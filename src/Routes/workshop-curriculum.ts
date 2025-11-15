import express from 'express';
import { workshopCurriculumController } from '../controllers';

const router = express.Router();

router.post('/add', workshopCurriculumController.add_workshop_curriculum);
router.post('/edit', workshopCurriculumController.edit_workshop_curriculum_by_id);
router.delete('/delete/:id', workshopCurriculumController.delete_workshop_curriculum_by_id);
router.get('/all', workshopCurriculumController.get_all_workshop_curriculum);
router.get('/:id', workshopCurriculumController.get_workshop_curriculum_by_id);

export const workshopCurriculumRoute = router;

