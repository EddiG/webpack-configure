import moment from 'moment';

(function() {
  const originalLog = console.log;

  console.log = (message, color = 'inherit') => {
    const time = moment().format('HH:mm:ss.ms');
    originalLog(`%c[${time}] %c${message}`, `color: red;`, `color: ${color};`);
  };

  console.debug = message => console.log(`DEBUG: ${message}`, 'yellow');
})();
