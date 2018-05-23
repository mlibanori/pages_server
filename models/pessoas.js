module.exports = (sequelize, DataType) => {
    const Pessoas = sequelize.define("Pessoas",
                                            {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome_razao:{
            type: DataType.STRING,
            allowNull: false
        },
        endereco:{
            type: DataType.STRING,
            allowNull: true
        },
        numero:{
            type: DataType.STRING(50),
            allowNull: true
        },
        bairro:{
            type: DataType.STRING,
            allowNull: true
        },
        complemento:{
            type: DataType.STRING,
            allowNull: true
        },
        cep:{
            type: DataType.STRING,
            allowNull: true
        },
        maisInformacoes: {
            type: DataType.TEXT,
            allowNull: true
        
        },
        pessoable: DataType.STRING
    });
    Pessoas.associate = function(models)
    {
       
    };
    return Pessoas;
}



