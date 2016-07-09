var self = this;

self.addEventListener('install', function(ev) {
	ev.waitUntil(
		caches.open('worker-cache').then(cache => {
			return cache.addAll([
				'/',
				'/main.js'
			]).then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('fetch', function(ev) {
	console.log(ev.request.url);
	ev.respondWith(
		caches.match(ev.request).then(response => {
			return response || fetch(ev.request);
		})
	);
});
