const moduleName = location.pathname.slice(1);

const module = import(`./route/${moduleName}`);
