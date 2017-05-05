export function showMessage(message) {
  if (DEVELOPMENT) {
    console.log('DEBUG:' + message);
  }

  alert(message);
}

export default showMessage;
