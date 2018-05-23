module.exports = function(app){
    const Propriedades = app.db.models.Propriedades;


    app.route('/api/propriedades')
      .post(function(req, res) {
        console.log(req.body);
        Propriedades.create(req.body)
            .then(result => res.json(result))
            .catch(error => {res.status(412).json(error.errors);});
    });

}