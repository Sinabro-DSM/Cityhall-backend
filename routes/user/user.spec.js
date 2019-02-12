const chai = require('chai');
const chaiHttp = require('chai-http');
const User = require('../../model/user');
const server = require('../../app');
chai.should();

chai.use(chaiHttp);

describe('User', () => {
  describe('/user/signup', () => {
    before((done) => {
      chai.request(server)
        .post('/user/signup')
        .send({ id: "nye7181", nickname: "NoYE", password: "password123", })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    after((done) => {
      User.user.deleteMany({}, (err) => {
        done();
      });
    });

    it('should return the status code 201', (done) => {
      chai.request(server)
        .post('/user/signup')
        .send({ id: "nye7182", nickname: "NoYE", password: "password123", })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    it('should return the status code 405 - already exist id', (done) => {
      chai.request(server)
        .post('/user/signup')
        .send({ id: "nye7181", nickname: "NoYE", password: "password123", })
        .end((err, res) => {
          res.should.have.status(405);
          done();
        });
    });

    it('should return the status code 405 - not exist password value', (done) => {
      chai.request(server)
        .post('/user/signup')
        .send({ id: "nye7181", nickname: "NoYE", })
        .end((err, res) => {
          res.should.have.status(405);
          done();
        });
    });
  });

  describe('/user/signin', () => {
    before((done) => {
      chai.request(server)
        .post('/user/signup')
        .send({ id: "nye7181", nickname: "NoYE", password: "password123", })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    after((done) => {
      User.user.deleteMany({}, (err) => {
        done();
      });
    });

    it('should return the status 200', (done) => {
      chai.request(server)
        .post('/user/signin')
        .send({ id: "nye7181", password: "password123", })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should return the status 405 - wrong password', (done) => {
      chai.request(server)
        .post('/user/signin')
        .send({ id: "nye7181", password: "password12", })
        .end((err, res) => {
          res.should.have.status(405);
          done();
        });
    });

    it('should return the status 405 - not exist id', (done) => {
      chai.request(server)
        .post('/user/signin')
        .send({ id: "nye7182", password: "password123", })
        .end((err, res) => {
          res.should.have.status(405);
          done();
        });
    });

    it('should return the status 405 - not exist password value', (done) => {
      chai.request(server)
        .post('/user/signin')
        .send({ id: "nye7181", })
        .end((err, res) => {
          res.should.have.status(405);
          done();
        });
    });
  });
});