var fs = require('fs');

var express = require('express'), app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send(fs.readFileSync('index.html', 'utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});