/** 토의 관련 모델
 * @module model/discussion
 * @requires mongoose
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** discussion schema
 * @constructor Discussion
 */
const discussionSchema = new Schema({
  title: { type: String, required: true, trim: true, },
  content: { type: String, required: true, trim: true, },
  user_id: { type: Schema.Types.ObjectId, required: true, },
  user_name: { type: String, required: true, },
  user_image: { type: String, required: true, },
  comments: { type: [Schema.Types.ObjectId], default: [], },
  created_at: { type: Date, default: Date.now(), },
  updated_at: { type: Date, default: Date.now(), },
});

/** discussion comment schema
 * @constructor DiscussionComment
 */
const commentSchema = new Schema({
  content: { type: String, required: true, trim: true, },
  user_id: { type: Schema.Types.ObjectId, required: true, },
  user_name: { type: String, required: true, },
  user_image: { type: String, required: true, },
  deep: { type: Number, default: 1, },
  previous_comment_id: { type: Schema.Types.ObjectId, },
  created_at: { type: Date, default: Date.now(), },
  updated_at: { type: Date, default: Date.now(), },
});

module.exports = {
  discussion: mongoose.model('discussion', discussionSchema),
  comment: mongoose.model('discussion-comment', commentSchema),
};