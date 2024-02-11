const NewsArticle = require('../controllers/newsArticle');

module.exports = function (app) {
    app.route('/news/create').post(async (req, res, next) => {
        try {
            let { newsTitle, newsDescription, matchId, tourId } = req.body;
            if (!newsTitle || !newsDescription) {
                return res.status(400).send({ message: "News Tile and News Description is requied" });
            }
            if (!matchId && !tourId) {
                return res.status(400).send({ message: "Please specify Match Id or Tour Id of the news" });
            }
            return res.json(await NewsArticle.createNews({ newsTitle, newsDescription, matchId, tourId }));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match').get(async (req, res, next) => {
        try {
            return res.json(await NewsArticle.fetchNewsByMatchId(req.query));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').get(async (req, res, next) => {
        try {
            return res.json(await NewsArticle.fetchNewsByTourId(req.query));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sports').get(async (req, res, next) => {
        try {
            return res.json(await NewsArticle.fetchNewsBySportsId(req.query));
        } catch (err) {
            return next(err);
        }
    });
}