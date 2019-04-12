import chai from 'chai';

import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

describe('Tests for all customers', () => {
  
    it('tests signing up', (done) => {
      chai.request(app)
        .post('/api/v1/customers/signup')
        .send({
          password: 'testuser'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        })
    })

    it('tests signing in', (done) => {
      chai.request(app)
        .post('/api/v1/customers/login')
        .send({
          email: 'test@user.com',
          password: 'testuser'
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('No such customer exixts');
          expect(err).to.be.null;
          done();
        })
    })
})