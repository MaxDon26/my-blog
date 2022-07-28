import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";
import { checkAuth } from "../utils/check.js";

const router = new Router();

// register
router.post("/register", register);

// login
router.post("/login", login);

// get me
router.get("/me", checkAuth, getMe);

export default router;
