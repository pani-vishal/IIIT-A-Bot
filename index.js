"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var rank =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.rank
      ? req.body.queryResult.parameters.rank
      : "Seems like no rank was given";
  
  var category =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.category
      ? req.body.queryResult.parameters.category
      : "Seems like no category was given";

  speech = "Your rank is "+ rank.toString() + " and your category is " + cat;
  return res.json({
    "fulfillmentMessages": [{"text": {"text": [speech]}}],
    "source":""
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});