// TypeIt JS library
new TypeIt("#intro-name", {
    strings: "Hi I'm Charles!",
    speed: 125,
    loop: false,
    cursor: false
  }).go();

// Jump.js library
document.getElementById("about-jump").onclick = function() {
    Jump("#About");
};

document.getElementById("experience-jump").onclick = function() {
    Jump("#Experience");
};

document.getElementById("contact-jump").onclick = function() {
    Jump("#Contact");
};

document.getElementById("up-arrow").onclick = function() {
    Jump("#Home");
};

document.getElementById("contact-button").onclick = function() {
    Jump("#Contact");
};

//ScrollRevealjs library

ScrollReveal().reveal('#one', {delay: 200, duration: 1000});

ScrollReveal().reveal('#two', {delay: 200, duration: 1000});

ScrollReveal().reveal('#about-me', {delay: 200, duration: 1000});

ScrollReveal().reveal('#hobbies', {delay: 500, duration: 1000});

ScrollReveal().reveal('#contact-title h2', {delay: 200, duration: 1000});

ScrollReveal().reveal('#hyperlinks', {delay: 200, duration: 1000});

ScrollReveal().reveal('.bottom-nav', {delay: 200, duration: 1000});