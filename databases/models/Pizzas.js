module.exports = (sequelize, DataTypes) => {
    //Retornaremos o resultado da função sequelize.define
    //passando p ela 3 parâmetros:
    //1 - Nome da Model
    //2 - Objeto descrevendo as colunas da tabela que a model vai representar
    //3 - Um objeto com algumas opções
     const Pizzas = 
     sequelize.define(
        'Pizzas', //nome da model
        {// objetoo que descreve as colunas da tabela
            id: {
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            preco:{
                type: DataTypes.DECIMAL(10,2),
                allowNull: false

            },
            score:{
                type:DataTypes.INTEGER,
                allowNull: true
            },
            destaque:{
                type:DataTypes.BOOLEAN,
                allowNull: false
            },

            img:{
                type: DataTypes.STRING(255),
                allowNull: false
            }

        },
        {
            //Objeto de opções
            tableName: "pizzas",
            timestamps:false

        }

        
    )

    Pizzas.associate = (models) => {
        Pizzas.belongsToMany(models.Ingrediente, {
            as: "ingredientes",
            through: "pizzas_ingredientes",
            foreignKey: "ingrediente_id",
            timestamps: false
        })
    }

    return Pizzas
}