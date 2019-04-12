const request = require('supertest');
const server = require('./server.js');


describe('server.js', () => {

    describe('GET /', () => {
        it("should return api: 'It is working!!!'", () => {
            return request(server)
              .get('/')
              .then(res => {
                expect(res.body).toEqual({ api: 'It is working!!!' });
              });
        });
    
        it('should check for json', () => {
            return request(server)
              .get('/')
              .expect('Content-Type', /json/);
        }); 
    });

    describe('GET /games', () => {
        it('should work', () => {
            return request(server)
                .get('/games')
                .expect(200);
        });

        it('should respond with 200 OK', () => {
            return request(server)
                .get('/games')
                .then(response => {
                expect(response.status).toBe(200);
                });
        });

        it('should respond with 200 OK when asynchronous', async () => {
            const response = await request(server).get('/games');

            expect(response.status).toBe(200);
        });

        it('should return JSON', () => {
        return request(server)
            .get('/')
            .then(res => {
            expect(res.type).toBe('application/json');
            });
        });
    });

    describe('POST /games', () => {
        it('should work', () => {
            return request(server)
                .post('/games')
                .expect(422);
        });

        it('should respond with 422 if information is incomplete', () => {
            return request(server)
                .post('/games')
                .then(response => {
                    expect(response.status).toBe(422);
                });
        });

        it('should respond with 422 when asynchronous and information is incomplete', async () => {
            const response = await request(server).post('/games');

            expect(response.status).toBe(422);
        });

        it('should return JSON', () => {
        return request(server)
            .post('/games')
            .then(res => {
            expect(res.type).toBe('application/json');
            });
        });
    });



});
