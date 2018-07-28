var college_ranks = [
  {
      "name" : "IIIT Allahabad",
      "category" : {
        "GEN" : {
          "closing_rank_IT" : 6259,
          "closing_rank_ECE" : 10782
        },
        "SC" : {
          "closing_rank_IT" : 1958,
          "closing_rank_ECE" : 2719
        },
        "ST" : {
          "closing_rank_IT" : 1600,
          "closing_rank_ECE" : 2400
        },
        "OBC" : {
          "closing_rank_IT" : 2580,
          "closing_rank_ECE" : 3600
        }
      }
  },
  {
    "name" : "NIT Allahabad",
    "category" : {
      "GEN" : {
        "closing_rank_IT" : 6260,
        "closing_rank_ECE" : 7889
      },
      "SC" : {
        "closing_rank_IT" : 2958,
        "closing_rank_ECE" : 3719
      },
      "ST" : {
        "closing_rank_IT" : 2600,
        "closing_rank_ECE" : 3400
      },
      "OBC" : {
        "closing_rank_IT" : 3580,
        "closing_rank_ECE" : 4600
      }
    }
  }
]




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
  var rank = req.body.queryResult.parameters.rank;
  
  var category = req.body.queryResult.parameters.category;

  var speech = "Your rank is "+ rank + " and your category is " + category + ". Based on that you can choose "

  for(var i = 0; i < college_ranks.length; i++){
    if(rank <= college_ranks[i].category[category]["closing_rank_IT"]){
      speech += college_ranks[i]["name"] + "IT, ";
    }
    if(rank <= college_ranks[i].category[category]["closing_rank_ECE"]){
      speech += college_ranks[i]["name"] + "ECE, ";
    }  
  }


  // var speech = "Your rank is "+ rank + " and your category is " + category + ". You can try these colleges: " + college_array.toString();
  return res.json({
    "fulfillmentMessages": [{"text": {"text": [speech]}}],
    "source":""
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});