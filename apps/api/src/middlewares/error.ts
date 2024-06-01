import { ZodError } from 'zod';
import type { Request, Response } from 'express';

export const errorHandler = (err: unknown, _req: Request, res: Response) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      errors: err.errors,
    });
  }
  return res.status(500).json(err);
};
