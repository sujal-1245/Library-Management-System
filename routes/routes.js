import express from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  replaceItem,
  updateItem,
  deleteItem
} from '../controllers/controllers.js'

const router = express.Router();

router.get("/books", getAllItems);
router.get("/books/:id", getItemById);
router.post("/books", createItem);
router.put("/books/:id", replaceItem);
router.patch("/books/:id", updateItem);
router.delete("/books/:id", deleteItem);

export default router;
