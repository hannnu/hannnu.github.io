'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "321f6602bd6ea42ead047d18113e5f41",
"assets/assets/images/404-not-found.jpg": "93cb799f560117da5fc1f9244e6b0dd7",
"assets/assets/images/omg.png": "a56250ffbad5b0bbc3bbd695ec7cb798",
"assets/assets/images/TimeshareIcon-300x300.png": "ba64a363b561a9a11ee38b44b097c723",
"assets/assets/images/Timeshare_Capped1_720-300x300.png": "645ab3fba794c3d69ca96a4a1fa67c32",
"assets/assets/images/Timeshare_Capped2_720-300x300.png": "0439e127484fc34906e2c075037cde4e",
"assets/assets/images/Timeshare_Capped3_720-300x300.png": "bfff43cfe079483162fac1f43c21b22d",
"assets/assets/images/Timeshare_Owned1_720-300x300.png": "598801e9bc7ee2f300540fc81eed88a6",
"assets/assets/images/Timeshare_Owned2_720-300x300.png": "e29302089a3e85c0564682b8bf692a16",
"assets/assets/images/Timeshare_Owned3_720-300x300.png": "46fc66d43cc63b652d785aac4a1e4d55",
"assets/assets/json/TSPU.json": "0a98b2d83adc8208ca665a247c7632f3",
"assets/assets/json/TS_data.json": "6dbd2cc23de1b8015b6be61cb7dfa851",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "3de4197b7d2e6afcd5c184b1579d66b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "979d07b3b9f89e940556c9b83c486052",
"/": "979d07b3b9f89e940556c9b83c486052",
"main.dart.js": "bf9d02f3a306297d20e7f2828c2a5a41",
"manifest.json": "7268cd837cc026a7b71d34a95aed380e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
