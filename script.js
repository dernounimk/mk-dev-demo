let bullets = document.querySelector(".bullets");
let landing = document.querySelector(".face");
let current = 1;
document.querySelector(".menu").addEventListener("click",function () {
    document.querySelector(".menu").classList.toggle("show");
})

function back() {
    if (current > 0) {
        bullets.children[current].classList.remove("active");
        landing.classList.remove(`landing-${current}`);
        current--;
        landing.classList.add(`landing-${current}`);
        bullets.children[current].classList.add("active");
    }
    else {
        bullets.children[current].classList.remove("active");
        landing.classList.remove(`landing-${current}`);
        current = 2;
        landing.classList.add(`landing-${current}`);
        bullets.children[current].classList.add("active");
    }
}

function next() {
    if (current < 2) {
        let bullets = document.querySelector(".bullets");
        bullets.children[current].classList.remove("active");
        landing.classList.remove(`landing-${current}`);
        current++;
        landing.classList.add(`landing-${current}`);
        bullets.children[current].classList.add("active");
    }
    else {
        bullets.children[current].classList.remove("active");
        landing.classList.remove(`landing-${current}`);
        current = 0;
        landing.classList.add(`landing-${current}`);
        bullets.children[current].classList.add("active");
    }
}