// importing the object from the middleware
const {cookieJwtAuth} = require("../Middleware/CookieJwtAuth");

module.exports = (req, res) =>{
    res.redirect("/welcome");
};
