let compLength = 0;
let lapLength = 0;
let virLength = 0;
let max = 90;

var computer = document.querySelector(".computer-repair");
var laptop = document.querySelector(".laptop-repair");
var virus = document.querySelector(".virus-removal");
let cCheck, lCheck, vCheck = false;

function compAnimate() {
    if(compLength <= max) {
        computer.style.width = `${compLength}vw`;
        compLength+=.5;
        setTimeout(compAnimate, 5);
    }
}

function lapAnimate() {
    if(lapLength <= max) {
        laptop.style.width = `${lapLength}vw`;
        lapLength+=.5;
        setTimeout(lapAnimate, 5);
    }
}

function virAnimate() {
    if(virLength <= max) {
        virus.style.width = `${virLength}vw`;
        virLength+=.5;
        setTimeout(virAnimate, 5);
    }
}

window.addEventListener("scroll", function() {
    var computerPos = computer.getBoundingClientRect();
    var laptopPos = laptop.getBoundingClientRect();
    var virusPos = virus.getBoundingClientRect();

    if (computerPos.top >= 0 && computerPos.bottom <= window.innerHeight) {
        computer.classList.add("hover");
        cCheck = true;
        if(cCheck === true) {
            compAnimate();
        }
        
    }
    if (laptopPos.top >= 0 && laptopPos.bottom <= window.innerHeight) {
        laptop.classList.add("hover");
        lCheck = true;
        if(lCheck === true) {
            lapAnimate();
        }

    }
    if (virusPos.top >= 0 && virusPos.bottom <= window.innerHeight) {
        virus.classList.add("hover");
        vCheck = true;
        if(vCheck === true) {
            virAnimate();
        }
    }
});

