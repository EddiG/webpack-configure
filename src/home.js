import { showMessage } from './message';

showMessage('showMessage was invoked from home.js');

export function login() {
  import('./login')
    .then(module => module.login())
    .catch(err => console.debug('Failed to load "login" module', err));
}
