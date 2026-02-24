import express from "express";
import postForm from "../controller/form.js";
const router = express.Router();

router.post("/", postForm);

export default router;
