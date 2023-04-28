var video = document.querySelector('.video');
var play = document.querySelector('.play')
var pause = document.querySelector('.pause')
var btnremover = document.querySelector('.btnremover')

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
});

pause.addEventListener('click',()=>{
    video.pause();
    btnremover.style.left = '13vw'
});

play.addEventListener('click',()=>{
    video.play();
    btnremover.style.left = '5vw'
});