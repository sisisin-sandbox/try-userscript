// ==UserScript==
// @name         pixiv downloader
// @namespace    https://github.com/sisisin
// @version      0.1
// @description  tbd
// @author       sisisin
// @match        https://www.pixiv.net/*
// @grant        GM_download
// ==/UserScript==

let count = 0
function tryGetImage() {
  const i = document.querySelector('main img')
  if (i == null) {
    count++;
    if (count < 5) {
      return setTimeout(() => tryGetImage(), 1000)
    }
  } else {
    GM_download({
      url: i.src,
      name: i.alt
    })
  }
}

if (location.href === 'https://www.pixiv.net/artworks/78355378') {
  tryGetImage()
}