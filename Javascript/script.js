// Javascript for Animation 

window.addEventListener('scroll', move);

function move(){
    var moves = document.querySelectorAll('.move');

    for(var i=0; i<moves.length; i++){

        var windowheight = window.innerHeight;
        var movetop = moves[i].getBoundingClientRect().top;
        var movepoint = 150;

        if(movetop < windowheight - movepoint){
            moves[i].classList.add('active');
        }
        else{
            moves[i].classList.remove('active');
        }
    }
}

// Javascript for Responsiveness

navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger = document.querySelector('.burger')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class')
    navlist.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')

})
