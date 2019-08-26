/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "54485c22d0f91de178eb994d4d3da200"
  },
  {
    "url": "assets/css/0.styles.59644f6c.css",
    "revision": "437e3b295db5a8af3bcd4f9a100b5af2"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c81cff37.js",
    "revision": "39b9dcb200dca625e2f9c525db4c09cb"
  },
  {
    "url": "assets/js/10.e5b821d2.js",
    "revision": "e9b17c18b2b4192c7eef5075df531acd"
  },
  {
    "url": "assets/js/11.25b0a2ec.js",
    "revision": "c12e66ddfdeae370d495f876be9bd45c"
  },
  {
    "url": "assets/js/12.9eba95c1.js",
    "revision": "c78ac063cb977290c3420d9ca62b5a6c"
  },
  {
    "url": "assets/js/13.9a5c2112.js",
    "revision": "b1abccd4ecbdf651bd823aa921d97bc1"
  },
  {
    "url": "assets/js/14.9d214f8d.js",
    "revision": "4f84100a8cdde7dbce347e3cdd8f9719"
  },
  {
    "url": "assets/js/15.184f96d0.js",
    "revision": "c6c7ff2ddab7c984466b11660983c945"
  },
  {
    "url": "assets/js/16.6cff0a04.js",
    "revision": "9db91d0396e632e6016410fe4d60158a"
  },
  {
    "url": "assets/js/4.c402f76a.js",
    "revision": "3217fd7e20219e605e7f6013437c9aa3"
  },
  {
    "url": "assets/js/5.da387a4c.js",
    "revision": "f67815f7991659786c8779371127e06f"
  },
  {
    "url": "assets/js/6.772926a6.js",
    "revision": "aa48bd8db864a987dcc95c6c9330ec67"
  },
  {
    "url": "assets/js/7.0eae9ed6.js",
    "revision": "0596b8f3a3685f332452e681d82df7ee"
  },
  {
    "url": "assets/js/8.58eb9161.js",
    "revision": "7881bc2b85edec203ae93f10fbab6c43"
  },
  {
    "url": "assets/js/9.252af7ef.js",
    "revision": "591d8f4b56e418a5f7dd9829fa586dfe"
  },
  {
    "url": "assets/js/app.f72edc62.js",
    "revision": "9a75816265790fa6d78082efe7eadd19"
  },
  {
    "url": "assets/js/vendors~flowchart.6800d08e.js",
    "revision": "4f0f0f721084cdec1a7906e08bcdbb2a"
  },
  {
    "url": "category/category1.html",
    "revision": "ab9ffc3c761ebc65438acfbcf6a6f9d5"
  },
  {
    "url": "category/category2.html",
    "revision": "66ebde2d57ab22203355cc6c6b79c37b"
  },
  {
    "url": "category/index.html",
    "revision": "a1c3b5263c2e2c15d76f81832fad0056"
  },
  {
    "url": "head.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "88f021f405fee319489c0218d5cc0ac2"
  },
  {
    "url": "tag/index.html",
    "revision": "d4ef09926907994b1ddb35469197a522"
  },
  {
    "url": "tag/tag1.html",
    "revision": "0097ddfc128ffc735a179e086d848b25"
  },
  {
    "url": "tag/tag2.html",
    "revision": "2143c0375ffd787421b9a23c1bd426aa"
  },
  {
    "url": "tag/tag3.html",
    "revision": "e584884c73dd9c41a159ae8b4fadb82d"
  },
  {
    "url": "tag/tag4.html",
    "revision": "710b716b910e0055a3e9c0af6937b557"
  },
  {
    "url": "timeLine/index.html",
    "revision": "266a49a515f52c30902db3173b96cc5d"
  },
  {
    "url": "views/category1/2018/121501.html",
    "revision": "f6201816857d9a7bee43298fe75deb4c"
  },
  {
    "url": "views/category1/2019/092101.html",
    "revision": "682d93e9151684e44c0f270ae5c68799"
  },
  {
    "url": "views/category2/2016/121501.html",
    "revision": "dcc1a5b63cc12bcff92e601458be99b7"
  },
  {
    "url": "views/category2/2017/092101.html",
    "revision": "d3bdef7ef745b37881791a447e752bbc"
  },
  {
    "url": "views/other/guide.html",
    "revision": "f053e992025b640eec72b5e8dea24891"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
