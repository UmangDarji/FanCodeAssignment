const mysql = require('../lib/mysql');

const createNewsByMatchId = async params => {
    try {
        const fetchId = 'select t.sportId as sportsId, t.id as tourId from matches m inner join tours t on m.tourId = t.id  where m.id = ?;';
        const parameters = [params.matchId];
        let allIdsRes = await mysql.query(fetchId, parameters);
        if (allIdsRes && allIdsRes.length > 0) {
            const insertNewsStatement = 'insert into newsarticle (title, description, matchId, tourId, sportsId) values (?,?,?,?,?);';
            const parameters = [params.newsTitle, params.newsDescription, params.matchId, allIdsRes[0].tourId, allIdsRes[0].sportsId];
            return await mysql.query(insertNewsStatement, parameters);
        }
        else {
            return { message: "Record not created" };
        }
    }
    catch (error) {
        console.log("Error in insert query ------>", error);
        return { message: "Record not created" };
    }
}

const createNewsByTourId = async params => {
    try {
        const fetchId = 'select sportId, id from tours where id = ?;';
        const parameters = [params.tourId];
        let allIdsRes = await mysql.query(fetchId, parameters);
        if (allIdsRes && allIdsRes.length > 0) {
            const insertNewsStatement = 'insert into newsarticle (title, description, tourId, sportsId) values (?,?,?,?);';
            const parameters = [params.newsTitle, params.newsDescription, params.tourId, allIdsRes[0].sportId];
            return await mysql.query(insertNewsStatement, parameters);
        }
        else {
            return { message: "Record not created" };
        }
    }
    catch (error) {
        console.log("Error in insert query ------>", error);
        return { message: "Record not created" };
    }
}

const getNewsByMatchId = async (params) => {
    const statement = 'select title, description from newsarticle where matchId = ?;';
    const parameters = [params.matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
    const statement = 'select title, description from newsarticle where tourId = ?;';
    const parameters = [params.tourId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportsId = async params => {
    const statement = 'select title, description from newsarticle where sportsId = ?;';
    const parameters = [params.sportsId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNewsByMatchId: createNewsByMatchId,
    createNewsByTourId: createNewsByTourId,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportsId: getNewsBySportsId
}