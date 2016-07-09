// browser main.js
if ('serviceWorker' in navigator) {
	// register service worker
	navigator.serviceWorker.register('worcker-cache.js')
		.then((reg) => {
			console.log('Service Worker registe success.');
		});
}
