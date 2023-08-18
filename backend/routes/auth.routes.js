import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validateAuthSchema.js";

const authRouter = Router();

authRouter.post("/register", validateSchema(registerSchema), register);
authRouter.post("/login", validateSchema(loginSchema), login);
authRouter.post("/logout", logout);
authRouter.get("/profile", authRequired, profile);
authRouter.get("/verify", verifyToken);

export default authRouter;
