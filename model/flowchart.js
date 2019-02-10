/** 사건 순서도 관련 모델
 * @module model/flowchart
 * @requires mongoose
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** flowchart schema
 * @constructor Flowchart
 */
const flowchartSchema = new Schema({
  title: { type: String, required: true, trim: true, },
  user_id: { type: Schema.Types.ObjectId, required: true, },
  user_name: { type: String, required: true, },
  user_image: { type: String, required: true, },
  incidents: { type: [{
                news_id: { type: Schema.Types.ObjectId, required: true, },
                comment: { type: String, required: true, trim: true, },
              }], default: [],
  },
  comments: { type: [Schema.Types.ObjectId], default: [], },
  created_at: { type: Date, default: Date.now(), },
  updated_at: { type: Date, default: Date.now(), },
});

/** flowchart comment schema
 * @constructor FlowchartComment
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
  flowchart: mongoose.model('flowchart', flowchartSchema),
  comment: mongoose.model('flowchart-comment', commentSchema),
};