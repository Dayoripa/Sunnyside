const nabvar = document.querySelector('#nav');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
    nabvar.classList.add('nav-visible');
});

close.addEventListener('click', ()=> {
    nabvar.classList.remove('nav-visible')
});