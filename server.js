(function() {
    var express = require('express'),
        app = express();
    
    app.use(express.static('public'));

    app.get('/', function (request, response) {
        response.sendfile('./public/index.html');
    });
     
    app.listen(process.env.PORT);
})();