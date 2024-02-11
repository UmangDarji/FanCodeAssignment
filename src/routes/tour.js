const Tour = require('../controllers/tour');

module.exports = function (app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            let { name, pageNo, limit } = req.query;
            if (pageNo == 0)
                return res.status(400).send({ message: "Page No. should be an numerical value starting from 1" })
            limit = limit ? Number(limit) : 10; //limit = to fetch no of records based on limit given, default limit - 10 to fetch 10 records
            pageNo = pageNo ? (Number(pageNo) - 1) * limit : 0; //pageNo = to fetch data page wise, default page no - 1 to fetch records of 1st page
            let result = await Tour.getMatchesByTourName({ name, pageNo, limit });
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}