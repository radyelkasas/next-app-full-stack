import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Username must be at least 5 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),

  body: z
    .string()
    .max(120, {
      message: "Username must not be longer than 120 characters.",
    })
    .optional(),

  completed: z.boolean().optional(),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;
