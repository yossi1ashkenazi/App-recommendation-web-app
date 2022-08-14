const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
const cors = require('cors');
app.use(cors());
const search1 = require('./search');


app.listen(3001, () => {
    console.log('listening at 3001');
});

app.use(express.static('public'));

app.post('/', (req, res) => {
    console.log(req.body); // check the req body
    let newage = search1._calculateAge(req.body["age"]); // convert the string date to age
    var results = search1.search(req.body["cat1"], req.body["cat2"], req.body["cat3"], newage, req.body["rating"]);
    res.writeHead(200, { 'Content-Type': 'application/json' }); // set the head of the post response
    res.end(JSON.stringify(results));

})