import { SET_USERS, SET_CURRENT_USER, USER_LOADING, ADD_USER } from "../actions/types";


const isEmpty = require("is-empty");

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  isAuthenticated: !isEmpty(user),
  user,
  loading: false,
  users: ['']
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case ADD_USER:
      const users = state.users.concat(action.payload)
      return{
        ...state,
        users
      }
    case SET_USERS:
        return {
            ...state,
            users: action.payload
        };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}