import express from 'express';
import { blogController } from '../controllers';

const router = express.Router();

router.post('/add', blogController.addBlog);
router.post('/update/:id', blogController.updateBlog);
router.delete('/delete/:id', blogController.deleteBlog);
router.get('/get', blogController.getBlog);

export const blogRoute = router;
