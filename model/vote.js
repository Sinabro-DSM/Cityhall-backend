/** 모의투표 관련 모델
 * @module model/vote
 * @requires mongoose
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** vote schema
 * @constructor Vote
 */
const voteSchema = new Schema({
  title: { type: String, required: true, trim: true, },
  candidate: { type: [{
                name: { type: String, required: true, },
                description: { type: String, required: true, },
                voted_num: { type: Number, default: 0, },
              }], default: [],
  },
  created_at: { type: Date, default: Date.now(), },
  updated_at: { type: Date, default: Date.now(), },
});

/** vote request schema
 * @constructor VoteRequest
 */
const requestSchema = new Schema({
  title: { type: String, required: true, trim: true, },
  content: { type: String, required: true, trim: true, },
  user_id: { type: Schema.Types.ObjectId, required: true, },
  user_name: { type: String, required: true, },
  user_image: { type: String, required: true, },
});

module.exports = {
  vote: mongoose.model('vote', voteSchema),
  request: mongoose.model('vote-request', requestSchema),
};