/**
 * IMPORTANT: This script must be in the root directory, otherwise it will not work.


var date = new Date();
var timestamp = date.getTime();
var cachePrefix = 'uxbri';
var cacheVersion = timestamp + '0';

var cacheID = cachePrefix + cacheVersion;

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith(cachePrefix);
                }).map(function(cacheName) {
                    console.log('Deleting cache: ' + cacheName);
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    if (!event.request.url.startsWith('http')) {
        return;
    }
    event.respondWith(
        caches.open(cacheID).then(function(cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
 */