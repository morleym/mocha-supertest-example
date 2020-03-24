const should = require('chai').should();
const supertest = require('supertest');
const endpoint = 'https://postman-echo.com';
const request = supertest(endpoint);

describe('/get', () => {
    it('returns the url parameters you pass it', async () => {
        const response = await request.get('/get')
            .query({greeting: 'Good morning!', farewell: 'Toodles!'});
        
        response.body.args.greeting.should.equal('Good morning!');
        response.body.args.farewell.should.equal('Toodles!');
    })
})

describe('/post', () => {
    it('returns the form data you pass it', async () => {
        const formData = {
            username: 'morleym',
            password: 'VerySecureTrustMe'
        }

        const response = await request.post('/post')
            .send({formData});
        
        response.body.data.formData.should.deep.equal(formData);
    })
})