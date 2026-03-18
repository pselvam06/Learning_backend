// server/models/StudyPlan.js
const mongoose = require('mongoose');

const studyPlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  educator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weeks: [{
    weekNumber: Number,
    topic: String,
    description: String,
    resources: [{
      title: String,
      url: String,
      type: String // video, article, document
    }],
    objectives: [String],
    startDate: Date,
    endDate: Date
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('StudyPlan', studyPlanSchema);