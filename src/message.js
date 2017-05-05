export function showMessage(message) {
  if (DEVELOPMENT) {
    const time = new Date().toJSON();
    console.log(
      `%c[${time}] %cDEBUG: ${message}`,
      'color: red;',
      'color: yellow;',
    );
  }

  alert(message);
}

export default showMessage;
