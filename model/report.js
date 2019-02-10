/** 신고 관련 모델
 * @module model/report
 * @requires mongoose
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** report schema
 * @constructor Report
 */
const reportSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, },
  category: { type: String, required: true, },
  type: { type: String, required: true, },
});

module.exports = {
  report: mongoose.model('report', reportSchema),
};