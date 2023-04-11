module.exports = (sequelize, DataTypes) => {

    const Pedidos = sequelize.define(
        'Pedidos', //nome da model
        {           // objeto descrevendo as colunas da tabela q esta sendo representada
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            obs: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            total: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            forma_pagamento_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {               //objeto carregando algumas características
            tablestamps: 'pedidos',
            timestamps: false
        }
    )

    Pedidos.associate = (models) => {
        Pedidos.belongsToMany(
            models.Pizzas,
            {
                as:'pizzas',
                through: 'pedido_pizza',
                foreignKey: 'pedido_id',
                otherKey: 'pizza_id',
                timestamps: false
            }
        )
    }

    return Pedidos
}