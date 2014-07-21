(function() {
    var express = require('express'),
        app = express();
    
    app.use(express.static('public'));

    app.get('/', function (request, response) {
        response.sendfile('./public/index.html');
    });
     
    if (typeof NODE_ENV === 'undefined') {
    	app.listen(3000);
    } else if (NODE_ENV === 'production') {
    	app.listen(process.env.PORT);
    }
})();