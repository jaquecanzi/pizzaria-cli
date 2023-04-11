const {Pedidos, sequelize} = require('../databases/models')

async function teste() {
    const pedidos = await Pedidos.findAll({include: 'pizzas'})
    console.log(pedidos.map(e => e.toJSON()))
    sequelize.close()
}

teste()