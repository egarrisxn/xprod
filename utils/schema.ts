import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email({
    message: "Email must be a valid email address.",
  }),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export type FormValueType = z.infer<typeof authSchema>;

export const profileSchema = z.object({
  userId: z.string(),
  full_name: z.string().nullable(),
  username: z.string().nullable(),
  website: z.string().url().nullable(),
  avatar_url: z.string().nullable(),
});

export type ProfileValueType = z.infer<typeof profileSchema>;
