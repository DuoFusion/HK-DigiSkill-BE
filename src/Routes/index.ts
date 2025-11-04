import express from 'express'
import { aboutUsRoutes } from './about-us'
import { blogRoute } from './blog'

const router = express.Router()

router.use('/about-us', aboutUsRoutes)
router.use('/blog', blogRoute)


export { router }