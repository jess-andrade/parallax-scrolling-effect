let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsB = document.getElementById('mountains_behind');
let mountainsF = document.getElementById('mountains_front');
let title = document.getElementById('title');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.6 + 'px';
    mountainsB.style.top = value * 0.1 + 'px';
    mountainsF.style.top = value * 0 + 'px';
    title.style.marginRight = value  * 4 + 'px';
    btn.style.marginTop = value  * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});