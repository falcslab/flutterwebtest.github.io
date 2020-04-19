'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AbrilFatface-Regular.ttf": "8c6847c75ae35d0ca5fd3798d4567443",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "5914904b4efeafdaff1efb8cc0315e3d",
"assets/food/butternut_squash_soup.png": "4e72e55296c75084eb24bf08b1f795d1",
"assets/food/cherry_pie.png": "ff202afc702400f0a59654d3785cb46f",
"assets/food/chopped_beet_leaves.png": "ca81f07e227199d24e30e0a9ebf0b53a",
"assets/food/icons/fish.png": "2f17697038c02a2d81f9611c777177b3",
"assets/food/icons/healthy.png": "fd3ac06f1b3c7c5c3b62c8f153007e2a",
"assets/food/icons/main.png": "8877cbbddf832e353a5ace114b7b3582",
"assets/food/icons/meat.png": "9fee8306b4b973b6b1b2392fdc1f4750",
"assets/food/icons/quick.png": "06e8a38d78bb460e8b6b637acd6076fc",
"assets/food/icons/spicy.png": "23c90d6f7f964d617e585c1455222454",
"assets/food/icons/veggie.png": "780038b61ad3c9d730a80cd78cedc4c8",
"assets/food/pesto_pasta.png": "a8a86bb5094e1e5b4f31a5e646b8ddda",
"assets/food/roasted_chicken.png": "683ee5247a543a1b740202335e73bed1",
"assets/food/spanakopita.png": "a48df476fcac1bbbcf716a6d6abdcd15",
"assets/food/spinach_onion_salad.png": "ec35ae9fde6ea99cca592f2b59a762d8",
"assets/GalleryIcons.ttf": "7d45e7df60cb4a98b595018c74614367",
"assets/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/LibreFranklin-Regular.ttf": "30ee60852dd36a04ac070c7b94cd25be",
"assets/LICENSE": "fad72f6cf757d044a2e1f8755e258095",
"assets/logos/flutter_white/1.5x/logo.png": "1822900bb7d73251363f8cdeb309e904",
"assets/logos/flutter_white/2.5x/logo.png": "76920243cac198ce1c1d3e063245a362",
"assets/logos/flutter_white/3.0x/logo.png": "a580fa6adcc6eeaec4a8481ff552433d",
"assets/logos/flutter_white/4.0x/logo.png": "c66df993abf40937433483f1ad61e3a5",
"assets/logos/flutter_white/logo.png": "0d8b14846d69052c6ba2ca629228342b",
"assets/logos/pesto/logo_small.png": "357511a4756593a91a05cd0d29d4d0ae",
"assets/Merriweather-Regular.ttf": "f96a44b40f99ae4b63f275f1142f7c98",
"assets/people/ali_landscape.png": "b50c31b3b4ed656b8199539e3590a2ea",
"assets/people/square/ali.png": "57935aa3afcd7ec5d715bfae5cbc7415",
"assets/people/square/peter.png": "76f64ff1e9aba03d09ed0e1253ddeb4e",
"assets/people/square/sandra.png": "9b6d699b6a0084da97b9cbc7cb60a13e",
"assets/people/square/stella.png": "e952e3eb40d945bb80e5edb5acd88ce7",
"assets/people/square/trevor.png": "32e3f86883d3ec97280206c8d6d3f704",
"assets/places/india_chennai_flower_market.png": "3458b6a886a59f23c9812c700bc523c6",
"assets/places/india_chennai_highway.png": "34c47750c6a4a4dc9542c5baacf35f1d",
"assets/places/india_chettinad_produce.png": "4db816394a82d4babdb56dbb0b040a54",
"assets/places/india_chettinad_silk_maker.png": "f5bb23be027e7629592cbac25a332bb1",
"assets/places/india_pondicherry_beach.png": "15703b9dc08d3f72d031b07554be67be",
"assets/places/india_pondicherry_fisherman.png": "2f2a07fc9b73ad3b76c5658b54092a18",
"assets/places/india_pondicherry_salt_farm.png": "8e221af1692fc7998ec30f9d3e8ebda8",
"assets/places/india_tanjore_bronze_works.png": "b0398b1b959b8e71af9d60a75cc88e76",
"assets/places/india_tanjore_market_merchant.png": "2d7742572aa3daa3bab31e4ff7aaf96e",
"assets/places/india_tanjore_market_technology.png": "c340b27766b4c740ded0b3a9f64e2de5",
"assets/places/india_tanjore_thanjavur_temple.png": "92ad73aae1551ebc5c23e177ba93df54",
"assets/places/india_tanjore_thanjavur_temple_carvings.png": "b1d79a13d96d7f83bafc254814e5a034",
"assets/places/india_thanjavur_market.png": "92d2676a5d645286086840e1744cb84d",
"assets/products/backpack.png": "a2f02f7e815f34e512016f491fbbdb89",
"assets/products/belt.png": "2951b974c42f4bea7a4f2039983b4ef4",
"assets/products/cup.png": "397c07a09785573f2a819bd4c46873cb",
"assets/products/deskset.png": "39dd91dbcc8de9b27c240d34ce2abc14",
"assets/products/dress.png": "43317117886dab932d5a2901d7de8c5b",
"assets/products/earrings.png": "d3000482a5818b99472213931a345a97",
"assets/products/flatwear.png": "2c3d5b2e9903f7121d7b3f92be21996a",
"assets/products/hat.png": "a0dbf370849c07097b36a4a2df4366bf",
"assets/products/jacket.png": "ffd2faf93afc989416fb4da4fdb5eec4",
"assets/products/jumper.png": "92dcb85411cf8bd9ce5e6423a27ac996",
"assets/products/kitchen_quattro.png": "3318bb42610ffd90bf463a91e6dd8f65",
"assets/products/napkins.png": "df310113ca1528d997f9cb04db90dbb0",
"assets/products/planters.png": "64b8c422274da98952f2053a085472a0",
"assets/products/platter.png": "a7f2b6d2dd6b0d231a6e29740148b6e5",
"assets/products/scarf.png": "7c6097342c4b204de39508b8feac248d",
"assets/products/shirt.png": "fb636ecd3a6740854343324faf2bda12",
"assets/products/sunnies.png": "4277d0848a521455791469314160c436",
"assets/products/sweater.png": "875f8322fb687a120f355b495125cffc",
"assets/products/sweats.png": "b7c792d6d3a195bab684e1b87cb52d1c",
"assets/products/table.png": "59226be4ace5a22a5917b44f1920d431",
"assets/products/teaset.png": "4131cbb857800eb650b5f5062b3772a7",
"assets/products/top.png": "7abed6abd870e197616d9da154d98999",
"assets/Raleway-Regular.ttf": "580d0778ad254335be45bf58bb449f43",
"assets/README.md": "03ee777e280e51cd44ed3724df3746f6",
"houdini.html": "d3529e9fbcf9d8c16026caa003762430",
"houdini_main.dart": "0e205dc580e287b886c90c59b636e775",
"index.html": "27b7acd4180918152198806aa84b3dbc",
"/": "27b7acd4180918152198806aa84b3dbc",
"main.dart": "b47fa491293e0c280bd09f40b968b03d",
"main.dart.js": "e50849bb4c03a3964f90e68d96c6e8a9"
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
