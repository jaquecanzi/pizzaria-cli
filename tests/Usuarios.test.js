const { Usuarios } = require('../databases/models');

async function teste(){
    // let usuario = await Usuarios.findByPk(2, {raw:true, include: "enderecos"});
    let usuario = await Usuarios.findByPk(2, {include: "enderecos"});
    console.log(usuario.toJSON());
}
const {Ingrediente, sequelize} = require("../databases/models")

async function teste() {
    let ingredientes = await Ingrediente.findAll({include:"pizzas"})
    console.log(ingredientes.map(e => e.toJSON()));
    sequelize.close()
}
