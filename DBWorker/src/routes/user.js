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
        .post(updateUserInfo)
        .put(updateUserInfo)
        .delete(deleteUser)
    
    app.route('/user/delete/:email')
        .post(deleteUser)
}
export default routes