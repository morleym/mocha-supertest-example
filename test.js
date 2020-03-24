const assert = require('chai').assert;
const expect = require('chai').expect;
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