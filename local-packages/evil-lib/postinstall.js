const fs = require("fs");

const msg = `postinstall executed at ${new Date().toISOString()}\n`;
fs.appendFileSync("/tmp/evil-lib-postinstall.log", msg);

console.log("[evil-lib] postinstall executed (demo).");
