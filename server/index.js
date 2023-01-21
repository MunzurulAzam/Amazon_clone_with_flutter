// console.log("hellow world");
// // for printing in the terminal

//IMPORT FROM PACKAGES
const express = require('express'); 
//thats mean in flutter [inport 'package:express/express.dart]

//IMPORT OTHER PACKGES
const authRouter = require("./routes/auth");


const PORT = 3000;
//you can use any number of but for memorization i use 3000

const app = express();
//middle ware start

app.use(authRouter);

//middle ware end





app.listen(PORT, () => {

    console.log(`connected at port ${PORT}`);
    // `` this is the rules for java script
    
});
// when you deployed this thing must use "url in this section" but for now just for trail i use accessable host[(=> and function) are same meaning in js. both are work as a function]


