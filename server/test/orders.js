import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('All tests for creating orders', () => {

  it('tests an unauthenticated customer making order', (done) => {
    chai.request(app)
    .post('/api/v1/orders')
    .send({
      randomKey: 'randomValue'
    })
    .end((err, res) => {
      expect(res.status).to.equal(401);
      expect(err).to.be.null
      done();
    })
  });

  it('tests that a customer with invalid token', (done) => {
    chai.request(app)
    .post('/api/v1/orders')
    .set('token', 'q1w2e3er4rt5y6u7ui8o90p')
    .send({
      randomKey: 'randomValue'
    })
    .end((err, res) => {
      expect(res.status).to.equal(401);
      expect(res.body.message).to.equal('token Invalid');
      expect(err).to.be.null
      done();
    })
  });
  
});
