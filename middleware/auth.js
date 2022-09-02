const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, 'MYSECERETKEY');
        req.user = decoded;
    } catch (err) {
        return res.status(401).send({"status":"RXERROR","message":"Invalid Token"});
    }
    return next();
};

module.exports = verifyToken;


// {
//  status :"RXSUCCESS",
//  message:"User created successfully",
//  data  :[

//  ]
// }

// {
//  status :"RXERROR",
//  message:"email already exists",
//  errors:[
//     {
//         "email":"email already exists"
//     },
//     {
//         "password":"Please enter a strong password"
//     }
//  ]

// }

