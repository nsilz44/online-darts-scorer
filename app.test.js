/* eslint-disable no-undef */
'use strict';

const request = require('supertest');
const app = require('./app');

describe('test GET players', () => {
    test('GET /players succeeds', () => {
        return request(app)
            .get('/players')
            .expect(200);
    });
});
