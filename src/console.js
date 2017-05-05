(function() {
  const originalLog = console.log;

  console.log = (message, color = 'inherit') => {
    const time = new Date().toJSON();
    originalLog(`%c[${time}] %c${message}`, `color: red;`, `color: ${color};`);
  };

  console.debug = message => console.log(`DEBUG: ${message}`, 'yellow');
})();
