import axios from "axios";
import store from "../store"
import { GET_ERRORS, SET_CURRENT_USER, SET_USERS, ADD_USER} from "./types";
import swal from 'sweetalert'


const BASE_API_URI = process.env.REACT_APP_BASE_API_URI

// Register User
export const signUp = (userData, history) => dispatch => {

    axios
        .post(BASE_API_URI+"/users/", {params: userData})
        .then(res => {
            const {email, password} = res.data
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
            dispatch(cleanError())
            swal({
                title: "Good job!",
                text: "Sorry if it is not your super cool user \n But for now you can enter with \n\n Email: " + email  + "\n Pass: " + password,
                icon: "success",
                button: "It's ok!",
              });
            history.push("/")}
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login
export const loginUser = (user) => dispatch => {
    const {users} = store.getState().auth
    const foundedUser = users.find(u => u.email.toLowerCase() === user.email.toLowerCase())
    let errors = {}
    if (!foundedUser) {
        errors['email'] = 'Not founded email'
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
    } else {
        if (foundedUser.password.toString() === user.password) {
            dispatch(setCurrentUser(foundedUser))
            localStorage.setItem('user', JSON.stringify(foundedUser))
            dispatch(cleanError())
        }
        else {
            errors['password'] = 'Incorrect password'
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        }
    }

};

export const cleanError = () => (
    {
        type: GET_ERRORS,
        payload: {}
    }
)

// API users request
export const requestUsers = () => dispatch => {
    axios.get(BASE_API_URI+'/users').then(res => {
        const users = res.data
        
        dispatch(setUsers(users))
    }).catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

// Set logged in user
export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

export const setUsers = users => {
    return {
        type: SET_USERS,
        payload: users
    };
};


// Log user out
export const logoutUser = () => dispatch => {
    localStorage.setItem('user', JSON.stringify({}))
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
