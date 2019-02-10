/** Q&A 관련 모델
 * @module model/qna
 * @requires mongoose
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** qna schema
 * @constructor Qna
 */
const qnaSchema = new Schema({
  title: { type: String, required: true, trim: true, },
  content: { type: String, required: true, trim: true, },
  user_id: { type: Schema.Types.ObjectId, required: true, },
  user_name: { type: String, required: true, },
  user_image: { type: String, required: true, },
  comments: { type: [Schema.Types.ObjectId], default: [], },
  created_at: { type: Date, default: Date.now(), },
  updated_at: { type: Date, default: Date.now(), },
});

/** qna comment schema
 * @constructor QnaComment
 */
const commentSchema = new Schema({
  content: { type: String, required: true, trim: true, },
  user_id: { type: Schema.Types.ObjectId, required: true, },
  user_name: { type: String, required: true, },
  user_image: { type: String, required: true, },
  replies: { type: [{
              user_id: { type: Schema.Types.ObjectId, required: true, },
              user_name: { type: String, required: true, },
              content: { type: String, required: true, },
              created_at: { type: Date, default: Date.now(), },
              updated_at: { type: Date, default: Date.now(), },
            }], default: [],
  },
  created_at: { type: Date, default: Date.now(), },
  updated_at: { type: Date, default: Date.now(), },
});

module.exports = {
  qna: mongoose.model('qna', qnaSchema),
  comment: mongoose.model('qna-comment', commentSchema),
};