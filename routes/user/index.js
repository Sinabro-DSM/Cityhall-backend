/** 유저 관련 라우터
 * @module routes/user
 * @requires express
 */


const express = require('express');
const ctrl = require('./user.ctrl');
const router = express.Router();

/** @namespace user
 */
router.post('/signup', ctrl.postSignup)
  .post('/signin', ctrl.postSignin);

module.exports = router;