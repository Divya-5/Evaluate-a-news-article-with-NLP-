var aylien = require("aylien_textapi");

function validateRequest(req, res, next) {
    if (!req.body.text) {
        return res.status(400).json({
            message: 'Invalid input'
        })
    }
    return next();
}

function registerPostHandler(req, res, next) {
    var textapi = new aylien({
        application_id: "6efe4b15",
        application_key: "e9049b23c398fbc53dc7ea9a73f9190a"
    });
    textapi.sentiment({
        'url': req.body.text
    }, function (error, response) {
        res.send(response)
    });

}

exports.validateRequest = validateRequest;
exports.registerPostHandler = registerPostHandler;