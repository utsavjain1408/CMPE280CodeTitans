import {
    getKitchenByID,
    getKitchenByZip,
    createNewKitchen,
    UpdateKitchen,
    getAllKitchen,
    deleteKitchen
} from '../controllers/kitchen'

export const routes = (app) =>{
    app.route('/kitchens')
        .get(getAllKitchen)
    
    app.route('/kitchens/zip/:zip')
        .get(getKitchenByZip)
        
    app.route('/kitchen/:id')
        .get(getKitchenByID)
        .post(createNewKitchen)
        .put(UpdateKitchen)
        .delete(deleteKitchen)
}

export default routes