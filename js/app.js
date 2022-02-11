particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


// Split Text 
const splitText = document.querySelectorAll('.myself');
for ( let i = 0; i < splitText.length; i++ ) {
    splitText[i].innerHTML = splitText[i].textContent.replace(/\S/g, `<span class="animationText">$&</span>`);
};

// Animation text bubble
const animationText = document.getElementsByClassName('animationText');
for ( let i = 0; i < animationText.length; i++ ) {
    animationText[i].addEventListener('animationend', function() {
        animationText[i].classList.remove('animated');
    });
    animationText[i].addEventListener('mouseover', function() {
        animationText[i].classList.add('animated');
    });
}

// animation typing 
const breakLineAnimation = '^20 <br/>'
var typed1 = new Typed('#typing', {
    strings: [
        `if ( ! coffee ) {
            ${breakLineAnimation}
            coffee.refill = "FULL"
            ${breakLineAnimation}
            else {
            ${breakLineAnimation}
            coffee.drink()
            ${breakLineAnimation}
            }
            `,
        `if ( ! success ) {
            ${breakLineAnimation}
            success.get = "KEEP TRYING"
            ${breakLineAnimation}
            else {
            ${breakLineAnimation}
            success.reached = "GIVE ALMS"
            ${breakLineAnimation}
            }
            `
            ,
        `if ( lifestyle > enterprise ) {
            ${breakLineAnimation}
            lifestyle--
            ${breakLineAnimation}
            enterprise++
            ${breakLineAnimation}
            }
            `
    ],
    typeSpeed: 30,
    backSpeed: 15,
    cursorChar: '_',
    shuffle: false,
    loop: true
  });

const splitText2 = document.querySelectorAll('.text-scroll-down');

for ( let i = 0; i < splitText2.length; i++ ) {
    splitText2[i].innerHTML = splitText2[i].textContent.replace(/\S/g, `<span>$&</span>`);
};

var placeholderName = new Typed('#name', {
    strings: [
        'Your Name', 
    ],
    typeSpeed: 30,
    backSpeed: 20,
    attr: 'placeholder',
    bindInputFocusEvents: false,
    smartBackspace: false,
    loop: false
  });
  
let placeholderEmail = new Typed('#email', {
    strings: [
        'Your Email with : PepiPost',
        'Your Email with : Outlook',
        'Your Email with : Proton Mail',
        'Your Email with : Google Mail', 
        'Your Email with : Yahoo Mail', 
        'Your Email with : Fast Mail', 
        'Your Email with : Yandex Mail', 
        'Your Email with : Zoho Mail', 
        'Your Email with : Aol Mail', 
        'Your Email with : Icloud Mail', 
        'Your Email with : Fuc*ing Mail', 
         
    ],
    typeSpeed: 30,
    backSpeed: 20,
    cursorChar: '_',
    attr: 'placeholder',
    bindInputFocusEvents: false,
    smartBackspace: true,
    loop: true
  });