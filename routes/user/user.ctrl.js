const crypto = require('crypto');
const {promisify} = require('util');
const User = require('../../model/user');

const randomBytes = promisify(crypto.randomBytes);
const pbkdf2 = promisify(crypto.pbkdf2);

/**
 * @name postSignup
 * @function
 * @memberof module:routes/user~userRouter
 * @inner
 * @param {Request} req - http request
 * @param {Response} res - http response
 */
const postSignup = async(req, res, next) => {
  const {id, nickname, password} = req.body;

  try {
    const sameIdCount = await User.user.countDocuments().where('id').equals(id);

    if(sameIdCount>0)
      throw new Error('exist id');

    const salt = (await randomBytes(64)).toString('base64');
    const key = (await pbkdf2(password, salt, 93528, 64, 'sha512')).toString('base64');

    const newUser = new User.user({
      id,
      nickname,
      password: key,
      password_salt: salt,
      image_path: '/public',
    });

    await newUser.save();

    res.status(201).end();
  } catch(e) {
    e.status = 405;
    next(e);
  }
};

/**
 * @name postSignin
 * @function
 * @memberof module:routes/user~userRouter
 * @inner
 * @param {Request} req - http request
 * @param {Response} res - http response
 */
const postSignin = (req, res) => {
  
};

module.exports = {
  postSignup,
  postSignin,
};