const request = require('supertest');
const server = require('./server.js');


describe('server.js', () => {
  describe('GET /', () => {
    it('should respond with 200 OK', () => {
      return request(server)
        .get('/')
        .then(response => {
          expect(response.status).toBe(200);
        });
    });

    it('should respond with 200 OK async', async () => {
      const response = await request(server).get('/');

      expect(response.status).toBe(200);
    });

    it('should respond with 200 OK async', done => {
      request(server)
        .get('/')
        .then(response => {
          expect(response.status).toBe(200);

          done();
        });
    });

    it('should work', () => {
      return request(server)
        .get('/')
        .expect(200);
    });

    it('should return JSON', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toBe('application/json');
        });
    });
  });

  it('should check for json', () => {
    return request(server)
      .get('/')
      .expect('Content-Type', /json/);
  });

  it("should return api: 'It is working!!!'", () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.body).toEqual({ api: 'It is working!!!' });
      });
  });
});
