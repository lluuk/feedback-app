import { Router } from 'express';
import { Feedback } from '../models/feedback';
import { feedbackSchema } from 'validation';
import { errorHandler } from '../middlewares/error';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const feedbackData = feedbackSchema.parse(req.body);
    const feedback = new Feedback(feedbackData);
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error) {
    next(error);
  }
});

router.use(errorHandler);

export default router;
