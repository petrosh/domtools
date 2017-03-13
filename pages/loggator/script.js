document.querySelector('.js-render').innerHTML = (loggator()) ? atob(JSON.parse(atob(localStorage.getItem('fnp'))).token) : 'Guest';
