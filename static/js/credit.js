const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isSuccess = urlParams.get('isSuccess');
const label = document.querySelector('.label');

label.innerHTML = isSuccess === 'true' ? 'HAPPY END' : 'SAD END';
