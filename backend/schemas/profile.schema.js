import { z } from "zod";
export const profileSchema = z.object({
  profileName: z.string({
    required_error: "Profile name is required"
  }),
  date: z.string().datetime().optional()
})