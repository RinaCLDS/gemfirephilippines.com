


function show1(){
    document.getElementById('vid-container').style.display = "grid";
    document.getElementById('PhotoG').style.display = "none";
    document.getElementById('cover').style.display = "none";
    document.getElementById('ev').style.display = "block";
    document.getElementById('heading').textContent = "Video clips";
}

function show2(){
    document.getElementById('PhotoG').style.display = "grid";
    document.getElementById('vid-container').style.display = "none";
    document.getElementById('cover').style.display = "none";
    document.getElementById('ev').style.display = "block";
    document.getElementById('heading').textContent = "Photos";
}

var myVideo = document.getElementById('video'); 

function hide1(){
    document.getElementById('cover').style.display = "block";
    document.getElementById('vid-container').style.display = "none";
    document.getElementById('PhotoG').style.display = "none";
    document.getElementById('ev').style.display = "none";
    document.getElementById('heading').textContent = "Gallery";
    myVideo.pause();
}


$ = function(id) {
    return document.getElementById(id);
  }
var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}

let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
    loginForm.classList.remove('active');
}

let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        }
    }
})


window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


var imgContainer = document.getElementsByClassName('.img-container');
var images = imgContainer.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = '<img src="' + this.src + '">';
    modal.addEventListener('click', function() {
      this.remove();
    });
    document.body.appendChild(modal);
  });
}


