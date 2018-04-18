let deferredPrompt;

// Is service worker available in browser?
if("serviceWorker" in navigator) {
  // if yes, register it (sw.js is at root path)
  navigator.serviceWorker.register("./sw.js")
  .then(() => {
    console.log("Service worker registered!");
  });
}

// If we don't want the banner showed when the criteria met
window.addEventListener("beforeinstallprompt", event => {
  console.log("beforeinstallprompt fired");
  // now chrome wont show the banner
  event.preventDefault();
  deferredPrompt = event;
  return false;
})