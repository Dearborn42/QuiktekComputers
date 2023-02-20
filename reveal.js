window.addEventListener("scroll", function() {
    let container = document.querySelector(".info");
    let containerInfo = document.querySelectorAll(".right");
    let pos = container.getBoundingClientRect();

    if (pos.top >= 0 && pos.bottom <= window.innerHeight) {
        container.classList.add("hover");
        containerInfo.classList.add("hover");
    }
});