const mongoose = require("mongoose");
const dayjs = require("dayjs");

// Schema to create Reaction model
const saveSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    saveId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    saveBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Add getter method to format timestamp on query
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) => {
        return dayjs(timeStamp).format("MMM D YYYY [at] h:mm A");
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = saveSchema;
