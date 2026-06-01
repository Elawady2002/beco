import { JSDOM, VirtualConsole } from 'jsdom';

const virtualConsole = new VirtualConsole();
virtualConsole.on("log", (message) => {
  console.log("Console Log:", message);
});
virtualConsole.on("error", (message) => {
  console.error("Console Error:", message);
});
virtualConsole.on("warn", (message) => {
  console.warn("Console Warn:", message);
});
virtualConsole.on("jsdomError", (error) => {
  console.error("JSDOM Script Error:", error.message, error.stack);
});

console.log("Fetching http://localhost:3000 ...");
JSDOM.fromURL("http://localhost:3000", {
  runScripts: "dangerously",
  resources: "usable",
  virtualConsole
}).then(dom => {
  console.log("DOM loaded. Title:", dom.window.document.title);
  // Wait 5 seconds for async scripts to execute
  setTimeout(() => {
    console.log("Checking HTML content...");
    console.log(dom.window.document.body.innerHTML.substring(0, 500));
    process.exit(0);
  }, 5000);
}).catch(err => {
  console.error("Failed to load JSDOM:", err);
  process.exit(1);
});
