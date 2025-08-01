import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/add", createContact);
router.get("/get", getAllContacts);

export default router;
