module.exports = (sequelize, DataType) => {
    const Pessoas = sequelize.define("Propriedades",
                                            {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        ccir: {
            type: DataType.STRING,
            allowNull: true
        },
        sncr: {
            type: DataType.STRING,
            allowNull: true
        },
        nirf: {
            type: DataType.STRING,
            allowNull: true
        },
        maisInformacoes: {
            type: DataType.TEXT,
            allowNull: true
        }
    });
    Pessoas.associate = function(models)
    {
       
    };
    return Pessoas;
}