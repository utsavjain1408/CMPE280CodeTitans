import {
    getAllOrders,
    getActiveOrdersByUser,
    getPastOrdersByUser,
    getAllOrdersByUser,
    getActiveOrdersByKitchen,
    getPastOrdersByKitchen,
    getAllOrdersByKitchen,
    createNewOrder
} from '../controllers/orders'

export const routes = (app) =>{
    app.route('/orders')
        .get(getAllOrders)
    app.route('/order/kitchen/:kitID')
        .get(getAllOrdersByKitchen)
    app.route('/order/kitchen/a/:kitID')
        .get(getActiveOrdersByKitchen)
    app.route('/order/kitchen/p/:kitID')
        .get(getPastOrdersByKitchen)
    app.route('/order/user/:userID')
        .get(getAllOrdersByUser)
        .post(createNewOrder)
    app.route('/order/user/a/:userID')
        .get(getActiveOrdersByUser)
    app.route('/order/user/p/:userID')
        .get(getPastOrdersByUser)
    }    

export default routes