(function() {
    var express = require('express'),
        app = express();
    
    app.use(express.static('public'));

    app.get('/', function (request, response) {
        response.sendfile('./public/index.html');
    });
     
    if (process && process.env && process.env.PORT) {
    	app.listen(process.env.PORT);
    } else {
    	app.listen(3000);
    }
})();