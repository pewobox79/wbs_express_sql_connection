import express from 'express';
import { UserController } from '../controller/userController.js';
const router = express.Router()


router.get("/", UserController.getAllUsers)
router.post("/", UserController.addNewUser)

router.put("/:id", UserController.updateUser)
router.get("/:id", UserController.getSingleUser)






export default router