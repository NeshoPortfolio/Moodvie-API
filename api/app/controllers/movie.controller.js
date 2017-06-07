import httpStatus from 'http-status';

import dbg from 'debug';
const DEBUG = dbg('dbg:movie-controller');

function get(req, res) {
    const genre = req.params.genre;
    const sort = req.query.sort;

    DEBUG(`/api/movie/${genre}?sort=${sort}`);

    // TODO: really get movies from api.themoviedb.org
    res.status(httpStatus.OK)
        .send(`/api/movie/${genre}?sort=${sort}`);
}

export default { get };
