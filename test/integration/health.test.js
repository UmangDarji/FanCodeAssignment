const request = require('supertest');
const { app } = require('../../index');

describe('Integration Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return a 200 OK status code for GET request to /health', async () => {
    const response = await request(server).get('/health');
    expect(response.status).toBe(200);
  });

  it('should return a 200 OK status code for GET request to /news/match', async () => {
    const response = await request(server).get('/news/match').query({matchId: 1});
    expect(response.status).toBe(200);
  });

  it('should return a 200 OK status code for GET request to /news/tour', async () => {
    const response = await request(server).get('/news/tour').query({tourId: 1});
    expect(response.status).toBe(200);
  });

  it('should return a 200 OK status code for GET request to /news/sports', async () => {
    const response = await request(server).get('/news/sports').query({sportsId: 1});
    expect(response.status).toBe(200);
  });

});