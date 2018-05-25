const ul = document.querySelector('.main-ul');
const hamb = document.querySelector('.menu');
const close = document.querySelector('.close');
const header = document.querySelector('.main-header');

hamb.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

function openNav() {
    ul.style.top = "30px";
    header.style.paddingTop = "250px";
    hamb.style.display = "none";
    close.style.display = "block";
}
function closeNav() {
    ul.style.top = "-1000px";
    header.style.paddingTop = "0";
    hamb.style.display = "block";
    close.style.display = "none";
    
}