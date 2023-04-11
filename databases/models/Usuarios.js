module.exports = (sequelize, DataTypes) => {
    const Usuarios =  sequelize.define(
        'Usuarios',
        {
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
            email:{
                type: DataTypes.STRING(255),
                allowNull: false,

            },
            senha:{
                type: DataTypes.STRING(255),
                allowNull: false

            }
        }, 
        {
            tableName: "usuarios",
            timestamps:false
        }
    )

    Usuarios.associate = (models) => {
        Usuarios.hasMany(models.Endereco, {as: "enderecos", foreignKey: "usuario_id"})
    }

    return Usuarios
}