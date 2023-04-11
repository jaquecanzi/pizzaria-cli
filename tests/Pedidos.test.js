const {Pedidos, sequelize} = require('../databases/models');

async function teste(){
    const pedido = await Pedidos.findByPk(5, {include:'pizzas'});
    console.log(pedido.toJSON());
    sequelize.close();
}
const {Pedidos, sequelize} = require('../databases/models')

async function teste() {
    const pedidos = await Pedidos.findAll({include: 'pizzas'})
    console.log(pedidos.map(e => e.toJSON()))
    sequelize.close()
}

teste();