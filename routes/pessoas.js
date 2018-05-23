    module.exports = function(app){
        const TiposTelefones = app.db.models.TiposTelefones;
        const EstadosCivis = app.db.models.EstadosCivis;


        app.route('/pessoas/telefones/tipos')
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
            });

        app.route('/pessoas/estadoscivis')
            .all((req,	res,	next)	=>	{
                //delete req.body.id;
                next();
            })
            .get(function(req, res) {
                EstadosCivis.findAll({})
                    .then(result => res.json(result))
                    .catch(error => {
                        res.sendStatus(412).send({message: error.message})
                    });
            });


    }