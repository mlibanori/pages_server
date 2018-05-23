module.exports = function(app){
    const TiposTelefones = app.db.models.TiposTelefones;
    const EstadosCivis = app.db.models.EstadosCivis;


    app.route('/clientes')
        .all((req,	res,	next)	=>	{
            //delete req.body.id;
            next();
        })
        .get(function(req, res) {
            TiposTelefones.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.sendStatus(412).send({message: error.message})
                });
        })
        .post(function(req, res) {
            console.log(req.body);
        });
        ok

}
