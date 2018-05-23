module.exports = function (app) {

    var path = require('path');

    app.get('*', function(req, res) {  
        res.sendFile(path.join(__basedir + '/public/index.html'));
    });
    app.db.sequelize.sync().done(function () {
        app.listen(app.get("port"), function () {
            console.log(`Pages Server - Porta: ${app.get("port")}`);
        });
    });

}

