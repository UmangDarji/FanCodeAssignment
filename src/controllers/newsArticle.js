const NewsArticle = require('../models/newsArticle');

const createNews = async (params) => {
    let insertRes
    if (params?.matchId && params?.matchId != "") {
        insertRes = await NewsArticle.createNewsByMatchId(params);
        return (insertRes && insertRes.message) ? insertRes : { message: "Record inserted successfully!" }
    }
    if (params?.tourId && params?.tourId != "") {
        insertRes = await NewsArticle.createNewsByTourId(params);
        return (insertRes && insertRes.message) ? insertRes : { message: "Record inserted successfully!" }
    }
}

const fetchNewsByMatchId = async (params) => {
    return await NewsArticle.getNewsByMatchId(params);
}

const fetchNewsByTourId = async (params) => {
    return await NewsArticle.getNewsByTourId(params);
}

const fetchNewsBySportsId = async (params) => {
    return await NewsArticle.getNewsBySportsId(params);
}


module.exports = {
    createNews: createNews,
    fetchNewsByMatchId: fetchNewsByMatchId,
    fetchNewsByTourId: fetchNewsByTourId,
    fetchNewsBySportsId: fetchNewsBySportsId
}