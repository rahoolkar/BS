const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb+srv://namastenode:aPc9v8OAmBiO44k2@devtinder.rmc7efb.mongodb.net/InterviewIQ",
  );
}

module.exports = main;
