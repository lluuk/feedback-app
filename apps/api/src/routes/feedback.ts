import { Router } from 'express';
import { feedbackSchema } from 'validation';
import { Feedback } from '../models/feedback';
import { errorHandler } from '../middlewares/error';
import { querySchema } from '../schemas/feedback-query';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const feedbackData = feedbackSchema.parse(req.body);
    const feedback = new Feedback(feedbackData);
    await feedback.save();
    res.status(201).send({ feedback: feedback });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  const { page, limit, sort, order, filter } = querySchema.parse(req.query);
  const query = filter ? { type: new RegExp(filter, 'i') } : {};

  try {
    const feedbacks = await Feedback.find(query)
      .sort({ [sort]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const feedbacksTotalCount = await Feedback.countDocuments(query);
    res
      .status(200)
      .send({ feedbacks: feedbacks, totalCount: feedbacksTotalCount });
  } catch (error) {
    next(error);
  }
});

router.use(errorHandler);

export default router;
