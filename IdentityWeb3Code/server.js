const express = require('express');
const app = express();
const fs = require('fs');
//const ip = require("ip");// ip.address() 
app.use('/', express.static('src'));
app.use('/abi', express.static('truffleWorkspace/build/contracts'));
//Host the app
app.listen(3042, () => console.log('Example app listening on port 3042!'));