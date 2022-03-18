'use strict';

let searchBtn = document.querySelector('.search-btn');
let searchInput = document.querySelector('.search-input');

/* using Enter key */
searchInput.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    let url = 'https://www.google.hr/search?q=' + searchInput.value;
    window.open(url, '_self');
    searchInput.value = '';
  }
});

/* Button click */
searchBtn.onclick = function () {
  let url = 'https://www.google.hr/search?q=' + searchInput.value;
  window.open(url, '_self');
  searchInput.value = '';
};
