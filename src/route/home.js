import { showMessage } from '../message';

showMessage('showMessage was invoked from home.js');

export function login() {
  import(/* webpackChunkName: "auth" */ '../login')
    .then(module => module.login())
    .catch(err => console.debug('Failed to load "login" module', err));
}

export function logout() {
  import(/* webpackChunkName: "auth" */ '../logout')
    .then(module => module.logout())
    .catch(err => console.debug('Failed to load "logout" module', err));
}

window.home = { login, logout };
