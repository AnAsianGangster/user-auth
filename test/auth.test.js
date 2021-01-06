const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server/index.server');

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe('auth', () => [
    /**
     * Test POST '/auth/signup' route
     */
    describe('POST /auth/signup', () => {
        const user = {
            username: 'test_user_1',
            email: 'test_email_1@email.com',
            password: 'password',
            profilePicUrl: 'test_profilePicUrl_1',
        };

        it('It should POST a user in database', (done) => {
            chai.request(server)
                .post('/auth/signup')
                .send(user)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.should.be.an('object');
                    done();
                });
        }).timeout(1000);
    }),
    /**
     * Test POST '/signin' route
     */
]);
