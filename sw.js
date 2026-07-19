const CACHE = 'aimer-docs-v6';
const ASSETS = ['./favicon.svg', './manifest.webmanifest'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => (k === CACHE ? null : caches.delete(k))))).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isHtml = url.pathname.endsWith('.html') || url.pathname.endsWith('/') || url.pathname.endsWith('sw.js');
  // HTML / SW: always network-first so rebuilds are visible immediately
  if (isHtml || url.pathname.endsWith('.js')) {
    e.respondWith(
      fetch(e.request).then((res) => res).catch(() => caches.match(e.request).then((h) => h || Response.error()))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      const copy = res.clone();
      if (res.ok && url.origin === self.location.origin && !url.pathname.endsWith('.html')) {
        caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return res;
    }))
  );
});