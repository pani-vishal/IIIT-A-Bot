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
  var rank = req.body.queryResult.parameters.rank
  
  var category = req.body.queryResult.parameters.category


  var speech = "Your rank is "+ rank + " and your category is " + category;
  return res.json({
    "fulfillmentMessages": [{"text": {"text": [speech]}}],
    "source":""
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});