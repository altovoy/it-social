import store from '../store'

export const getUserById= (id)=> {
    const {users} = store.getState().auth
    return users.find(user => user.id === id.toString())
}