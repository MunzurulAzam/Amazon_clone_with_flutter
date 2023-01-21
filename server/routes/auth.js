const express = require('express');

const authRouter = express.Router();

//creat a router
authRouter.get("/user", (req, res) => {
    res.json({ msg: "azam" });
})
//for access thats mean auth  folder now not a privet folder
module.exports = authRouter;