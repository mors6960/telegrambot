let webAppStarted = false;

function startWebApp() {
  if (!webAppStarted) {
    webAppStarted = true;
    console.log('Web app started');
    // Trigger any other initialization logic here
  }
}

function isWebAppStarted() {
  return webAppStarted;
}

module.exports = {
  startWebApp,
  isWebAppStarted,
};
