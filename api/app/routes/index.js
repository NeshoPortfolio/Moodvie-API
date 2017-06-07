import express from 'express';
import httpStatus from 'http-status';

import authRoutes from './auth.route';
import accountRoutes from './account.route';
import userRoutes from './user.route';
import movieRoutes from './movie.route';

const router = express.Router();

//-- GET /api/status/
router.get('/status', (req, res) => {
    res.send(httpStatus[200]);
});

router.use('/auth', authRoutes);

// TODO: add authentication
router.use('/account', accountRoutes);

// accessible by public
router.use('/user', userRoutes);
router.use('/movie', movieRoutes);

export default router;
