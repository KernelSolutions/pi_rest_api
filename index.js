const express = require("express");

//set up express app
const app = express();

//listen for requests
app.listen(process.env.PORT || 3000, function(){
    console.log("Listening on port 3000");
});