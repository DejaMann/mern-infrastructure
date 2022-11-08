const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
let token = req.get('Authorization') || req.query.token;
if (token) {
// Remove the 'Bearer' if it was included in the token header
token = token.replace('Bearer ', '');
// Check if token is valid and not expired
jwt.verify(token, process.env.SECRET, function(err, decoded) {
    
    }
)
    }
}
