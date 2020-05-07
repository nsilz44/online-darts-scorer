/* eslint-disable no-undef */
'use strict';

const request = require('supertest');
const app = require('./app');

describe('test players service', () => {
    test('GET /players succeeds', () => {
        return request(app)
            .get('/players')
            .expect(200);
    });
    test('GET players returns JSON', () => {
        return request(app)
            .get('/players')
            .expect('Content-type', /json/);
    });
    test('GET /search succeeds', () => {
        return request(app)
            .get('/players/search?find=steve')
            .expect(200);
    });
    test('GET /search returns JSON', () => {
        return request(app)
              .get('players/search?find=steve')
            .expect('Content-type', 'application/json');
    });
});

describe('test games service', () => {
    test('GET /game succeeds', () => {
        return request(app)
            .get('/game')
            .expect(200);
    });
    test('GET /game returns JSON', () => {
        return request(app)
            .get('/game')
            .expect('Content-type', /json/);
    });
    test('GET /search succeeds', () => {
        return request(app)
            .get('/game/search?find=steve')
            .expect(200);
    });
    test('GET /search returns JSON', () => {
        return request(app)
            .get('game/search?find=steve')
            .expect('Content-type', /json/);
    });
});

describe('test practice service', () => {
    test('GET / succeeds', () => {
        return request(app)
            .get('/game')
            .expect(200);
    });
    test('GET /game returns JSON', () => {
        return request(app)
            .get('/game')
            .expect('Content-type', /json/);
    });
    test('GET /search succeeds', () => {
        return request(app)
            .get('/players/search?Name=steve')
            .expect(200);
    });
    test('GET /search returns JSON', () => {
        return request(app)
            .get('players/search?Name=steve')
            .expect('Content-type', /json/);
    });
});
