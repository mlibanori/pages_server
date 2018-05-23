//Pessoas Físicas
module.exports = (sequelize, DataType) => {
    const PF = sequelize.define("PessoasFisicas",
                                            {
        pessoa_id:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        cpf:{
            type: DataType.STRING(11),
            allowNull: true
        },
        sexo:{
            type: DataType.CHAR(1),
            allowNull: true
        },
        
        
        data_nascimento: {
            type: DataType.DATEONLY,
            allowNull: true
        
        }
    });
    PF.associate = function(models)
    {
       
    };
    return PF;
}