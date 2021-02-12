const axios = require("axios").default;

exports.getSome = (req, res) => {
  const resp = {
    getSome: "like :D",
    body: req.body,
    query: req.query,
    params: req.params,
  };
  res.json(resp);
};

exports.handlePOST = (req, res) => {
  const resp = {
    handlePOST: "like :D",
    body: req.body,
    query: req.query,
    params: req.params,
  };
  res.json(resp);
};

exports.redirect = (req, res) => {
  res.redirect(`http://${req.params.id}.com`);
};
