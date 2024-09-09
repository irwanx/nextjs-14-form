import { z } from 'zod'

export const submissionSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(10).max(1000),
    image: z.instanceof(File).optional(),
})