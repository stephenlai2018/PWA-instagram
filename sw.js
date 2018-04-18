// "install" event
self.addEventListener("install", event => {
  console.log("[Service Worker] Installing Service Worker ...", event);
});

// "activate" event
self.addEventListener("activate", event => {
  console.log("[Service Worker] Activating Service Worker ...", event);
  return self.clients.claim();
});

// "fetch" event
self.addEventListener("fetch", event => {
  console.log("[Service Worker] Fetching something ...", event);
  event.respondWith(fetch(event.request));
})