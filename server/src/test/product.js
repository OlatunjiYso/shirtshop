import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('products test', () => {

  it('test for random routes', (done) => {
    chai.request(app)
      .get('/random/')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(err).to.be.null;
        done();
      })
  });

  it('tests for getting all products', (done) => {
    chai.request(app)
      .get('/api/v1/products/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null
        done();
      })
  });

  it('tests for getting a particular product', (done) => {
    chai.request(app)
      .get('/api/v1/products/6')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('productFound');
        expect(res.body).to.have.property('entireProduct');
        expect(res.body.entireProduct).to.have.property('foundProduct');
        expect(res.body.entireProduct).to.have.property('reviews');
        expect(res.body.entireProduct).to.have.property('attributes');
        expect(res.body.entireProduct).to.have.property('categoryName');
        expect(res.body.entireProduct).to.have.property('totalOrders');
        expect(err).to.be.null;
        done();
      })
  });

  it('tests for getting a non existing product', (done) => {
    chai.request(app)
      .get('/api/v1/products/100000')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.equal('no such products found!');
        expect(err).to.be.null;
        done();
      })
  });


})