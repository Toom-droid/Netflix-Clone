import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { profileSchema } from "../schemas/profile.schema.js";
import { validateSchema } from "../middlewares/validateAuthSchema.js";
import {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profile.controller.js";
const profileRouter = Router();

profileRouter.get("/profiles", authRequired, getProfiles);
profileRouter.get("/profiles/:id", authRequired, getProfile);
profileRouter.post(
  "/profiles",
  authRequired,
  validateSchema(profileSchema),
  createProfile
);
profileRouter.put(
  "/profiles/:id",
  authRequired,
  validateSchema(profileSchema),
  updateProfile
);
profileRouter.delete("/profiles/:id", authRequired, deleteProfile);

export default profileRouter