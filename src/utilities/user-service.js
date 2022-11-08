import {Link} from 'react-router-dom'
import * as usersAPI from './users-api'

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token)
    return getUser();
  }

  export function getToken() {
    // get token from local storage
    const token = localStorage.getItem('token')
    if (!token) return null

    // if we have a token
    const payload = JSON.parse(atob(token.split('.')[1]))
    // parsing string back to an array, payload is at index 1
    // console.log(payload)
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      // token expired = remove from local storage
      return null
      // deletes token if older than 24 hrs
    }
      return token
  }

  export function getUser() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }

  export function logOut () {
    localStorage.removeItem('token')
  }

  export async function login (userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.login(userData);
    localStorage.setItem('token', token)
    return getUser();
  }