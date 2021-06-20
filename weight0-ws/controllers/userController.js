const mongoose = require("mongoose");
const Weight = mongoose.model("Weight");

exports.getAllWeightRecords = (req, res) => {
  Weight.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  }).sort({ date: 1 });
};

exports.createWeightRecord = (req, res) => {
  const record = new Weight({
    weight: req.body.weight,
    date: req.body.date,
  });
  record.save((err, record) => {
    if (err) return console.error(err);
    console.log(`Saved: ${record.id}`);
    res.json({
      message: "Saved:" + record.id,
    });
  });
};

exports.deleteRecord = (req, res) => {
  Weight.findByIdAndDelete(req.body.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
      console.log("Deleted!");
    }
  });
};
