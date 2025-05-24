import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().nonempty('The email is required').email('The email is invalid'),
  password: z.string().nonempty('The password is required').min(6, 'Password must be at least 6 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
