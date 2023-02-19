let compLength = 0;
let lapLength = 0;
let virLength = 0;
let max = 1156;

var computer = document.querySelector(".computer-repair");
let cCheck = false;
var laptop = document.querySelector(".laptop-repair");
let lCheck = false;
var virus = document.querySelector(".virus-removal");
let vCheck = false;

function compAnimate() {
    if(compLength < max) {
        computer.style.width = `${compLength}px`;
        compLength+=2;
        setTimeout(compAnimate, 5);
    }
}

function lapAnimate() {
    if(lapLength < max) {
        laptop.style.width = `${lapLength}px`;
        lapLength+=2;
        setTimeout(lapAnimate, 10);
    }
}

function virAnimate() {
    if(virLength < max) {
        virus.style.width = `${virLength}px`;
        virLength+=2;
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

