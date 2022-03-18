'use strict';

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const luckyBtn = document.querySelector('.lucky-btn');

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

/* Lucky button for google search */
luckyBtn.onclick = function () {
  let url = 'https://www.google.hr/search?q=' + searchInput.value;
  window.open(url, '_self');
  searchInput.value = '';
};
