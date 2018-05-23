module.exports = function(app){
    const FrotaMarcas = app.db.models.FrotaMarcas;




    app.route('/frota/marcas').get(function(req, res) {
        FrotaMarcas.findAll({attributes: ['id', 'name']}).then(function(marcas){
           res.send(marcas) ;
        });
    });


}