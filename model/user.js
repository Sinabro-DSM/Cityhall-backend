/** 유저 관련 모델
 * @module model/user
 * @requires mongoose
 */


const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/** user schema
 * @constructor User
 */
const userSchema = new Schema({
  nickname: { type: String, required: true, trim: true, },
  id: { type: String, required: true, trim: true, },
  password: { type: String, required: true, },
  password_salt: { type: String, require: true, },
  image_path: { type: String, required: true, },
  is_admin: { type: Boolean, default: false, },
  scraps: { type: [Schema.Types.ObjectId], default: [], },
  created_at: { type: Date, default: Date.now(), },
  updated_at: { type: Date, default: Date.now(), },
});

/** news schema
 * @constructor News
 */
const newsSchema = new Schema({
  title: { type: String, required: true, },
  link: { type: String, required: true, trim: true, },
  description: { type: String, required: true, },
  pub_date: { type: String, required: true, },
});

/** notification schema
 * @constructor Notification
 */
const notificationSchema = new Schema({
  content: { type: String, required: true, trim: true, },
  user: { type: Schema.Types.ObjectId, required: true, },
  is_read: { type: Boolean, default: false, },
  created_at: { type: Date, default: Date.now(), },
});

module.exports = {
  user: mongoose.model('user', userSchema),
  news: mongoose.model('news', newsSchema),
  notification: mongoose.model('notification', notificationSchema),
};