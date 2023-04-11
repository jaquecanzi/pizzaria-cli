module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        'Endereco', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER
            },
            endereco: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: "enderecos",
            timestamps: false
        }
    )

    Endereco.associate = (models) => {
        Endereco.belongsTo(
            models.Usuarios,
            {as:"usuario", foreignKey:"usuario_id"}
        )
    }
    return Endereco
}