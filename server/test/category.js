import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('All tests for product category', () => {

  it('tests to fetch all categories in a department', (done) => {
    chai.request(app)
    .get('/api/v1/categories/1')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(err).to.be.null
      done();
    })
  });

  it('tests fetching categories with wrong departmentId', (done) => {
    chai.request(app)
    .get('/api/v1/categories/&')
    .end((err, res) => {
      expect(res.status).to.equal(404);
      expect(err).to.be.null
      done();
    })
  });

  it('tests for fetching products in a category', (done) => {
    chai.request(app)
    .get('/api/v1/categories/products/?category_id=1')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal('products found!');
      expect(err).to.be.null
      done();
    })
  });

  it('tests for fetching products in a non existing category', (done) => {
    chai.request(app)
    .get('/api/v1/categories/products/?category_id=9999')
    .end((err, res) => {
      expect(res.status).to.equal(404);
      expect(res.body.message).to.equal('no such category exist');
      expect(err).to.be.null
      done();
    })
  });

});
