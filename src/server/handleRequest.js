require('dotenv').config()
function validateInputRequest(req, res, next) {
    if(!req.body.text ) { 
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function PostHandler(req, res, next) {
    
    var aylien = require("aylien_textapi");
    var textapi = new aylien({
        application_id: "fd8545c8",
        application_key: "b0a124e0f9faa003e175d88359ad6315"
    });
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}

exports.validateInputRequest = validateInputRequest;
exports.PostHandler = PostHandler;