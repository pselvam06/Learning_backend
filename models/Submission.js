// server/models/Submission.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: true
  },
  learner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String
  },
  attachments: [{
    filename: String,
    url: String
  }],
  answers: [{
    questionId: String,
    answer: String
  }],
  score: {
    type: Number,
    min: 0
  },
  feedback: {
    type: String
  },
  status: {
    type: String,
    enum: ['submitted', 'graded', 'late'],
    default: 'submitted'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  gradedAt: Date
});

module.exports = mongoose.model('Submission', submissionSchema);