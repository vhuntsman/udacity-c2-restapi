import { requireAuth } from '../controllers/v0/users/routes/auth.router';
import * as express from 'express';
import 'mocha';

const chai = require("chai");
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

const mockResponse = () => {
    const res = {} as express.Response;
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns(res);
    return res;
};

describe('authenthication', () => {
    it('should return no authorization headers', () => {
        // Arrange
        let req = {} as express.Request;
        let res = mockResponse();

        // Act
        let result = requireAuth(req, res, null);

        // Assert
        expect(res.status).to.have.been.calledWith(401);
        expect(res.send).to.have.been.calledWith({ message: 'No authorization headers.' });
    });
});