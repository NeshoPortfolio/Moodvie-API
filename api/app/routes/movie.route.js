import express from 'express';
import httpStatus from 'http-status';

import movieCtrl from './../controllers/movie.controller';

const router = express.Router();

router.route('/:genre')
    .get(movieCtrl.get);

// TODO: other routes...

export default router;
