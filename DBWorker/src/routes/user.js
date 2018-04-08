import {
    createNewUser,
    getUserByEmail,
    updateUserInfo,
    deleteUser,
    getAllUsers
} from '../controllers/user'

export const routes = (app) =>{
    app.route('/user')
        .get(getAllUsers)
        .post(createNewUser)
    
    app.route('/user/:email')
        .get(getUserByEmail)
        .post(createNewUser)
        .put(updateUserInfo)
        .delete(deleteUser)
}
export default routes