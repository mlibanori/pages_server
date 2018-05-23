module.exports = function (app) {
    const bodyParser = require("body-parser");
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://localhost');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        next();
    });

    app.use(bodyParser.json())
    app.set("port",80);
    app.set("json spaces", 4);
}

