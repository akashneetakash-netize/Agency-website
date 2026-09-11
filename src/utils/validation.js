import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  
  businessName: z.string().optional(),
  
  email: z.string()
    .email('Please enter a valid work email address'),
  
  phone: z.string()
    .regex(/^[\d\s\-+()]*$/, 'Invalid phone number format')
    .optional()
    .or(z.literal('')),
  
  service: z.string()
    .min(1, 'Please select a service requirement'),
  
  message: z.string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message cannot exceed 1000 characters')
});
