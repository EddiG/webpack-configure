export function showMessage(message) {
  if (DEVELOPMENT) {
    console.debug(message);
  }

  alert(message);
}

export default showMessage;
