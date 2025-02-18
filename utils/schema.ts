import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email({
    message: "Email must be a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export type FormValueType = z.infer<typeof formSchema>;

// export const updateProfileSchema = z.object({
//   userId: z.string(),
//   name: z.string().nullable(),
//   website: z.string().url().nullable(),
//   avatar_url: z.string().nullable(),
// });
