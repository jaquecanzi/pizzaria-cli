module.exports = (sequelize, DataTypes) => {
    const Ingrediente = sequelize.define(
        'Ingrediente', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "ingredientes",
            timestamps: false
        }
    )

    Ingrediente.associate = (models) => {
        Ingrediente.belongsToMany(
            models.Pizzas,
            {
                as: "pizzas",
                through: "pizza_ingredientes",
                foreignKey:"ingrediente_id",
                otherKey:"pizza_id",
                timestamps: false
            }
        )
    }
    return Ingrediente
}