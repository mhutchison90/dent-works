// --IMPORTS--
const express = require('express')
, bodyParser = require('body-parser')


// --SETUP APP--
const app = express();
app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());


const path = require('path')
app.get('*', (req, res)=>{
res.sendFile(path.join(__dirname, '../build/index.html'));
})



// --SETUP APP TO LISTEN TO PORT--
const PORT = 8083;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
