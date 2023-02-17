const jwt = require("jsonwebtoken");

const getUser = async (username) =>{
    return {userId: 123, password: "123456", username};

};

module.exports = async (req, res) =>{
    const {username, password} = req.body;

    const user = await getUser(username);

    if(user.password !== password){
        return res.status(403).json ({
            error: "Invalid Login",
        })
    }


delete user.password;

// Important 

const token = jwt.sign(user, process.env.MY_SECRET, {expiresIn: "1h"});


res.cookie("token", token, {
    httpOnly: true,


    //secret true

    //maxAge: 100000

});

return res.redirect("/welcome");

};
