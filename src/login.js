import _ from 'lodash';

debugger;
const users = [{ id: 1, name: 'Jhon' }, { id: 2, name: 'Eric' }];

export function login(name) {
  alert('login was invoked from login.js');
  console.log(_.map(users, user => user.name));
}

export default login;
