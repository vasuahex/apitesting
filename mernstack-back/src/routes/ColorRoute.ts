import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { createColor, deleteColor, getAllColors, getColor, updateColor } from "../controller/ColorController.js"
import express from "express"

const router = express.Router();

router.post('/', authMiddleware, isAdmin, createColor)
router.put('/:id', authMiddleware, isAdmin, updateColor)
router.delete('/:id', authMiddleware, isAdmin, deleteColor)
router.get('/:id', authMiddleware, isAdmin, getColor)
router.get('/', authMiddleware, isAdmin, getAllColors)


export default router