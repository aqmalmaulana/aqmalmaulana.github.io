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

const splitText2 = document.querySelectorAll('.text-scroll-down');

for ( let i = 0; i < splitText2.length; i++ ) {
    splitText2[i].innerHTML = splitText2[i].textContent.replace(/\S/g, `<span>$&</span>`);
};


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

let placeholderSubject = new Typed('#subject', {
    strings: [
        'Subject' 
    ],
    typeSpeed: 30,
    backSpeed: 20,
    cursorChar: '_',
    attr: 'placeholder',
    bindInputFocusEvents: false,
    smartBackspace: true,
  });

let placeholderMessage = new Typed('#message', {
    strings: [
        'Message' 
    ],
    typeSpeed: 30,
    backSpeed: 20,
    cursorChar: '',
    attr: 'placeholder',
    bindInputFocusEvents: false,
    smartBackspace: true,
  });

const scriptURL = 'https://script.google.com/macros/s/AKfycbxKO44qWEQKzXWmsgGhZ6xOuYlMaeZNyIVW58sxRBknrJVA_pJ0d39-Fk-udBJ-VXyf/exec ';
const form = document.forms['form-portfolio'];

form.addEventListener('submit', function(e) {
    const messageForm = document.getElementById('message-form');
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(Response => {
        messageForm.style.display = "flex";
        form.reset();
        console.log('success!', response)
    })
    .catch(error => console.log('Error!', error.message))

    setTimeout(() => {
        messageForm.style.display = "none";
    }, 5000);
})

const containerNavbarResponsive = document.getElementsByClassName('menu-res')[0];
const containerNavbar = document.getElementById('menuTab');
const containerLeft = document.getElementsByClassName('section-left')[0];
const HamburgerMenu = containerNavbarResponsive.querySelector('ul li:nth-child(2)');
const closeMenu = document.getElementsByClassName('close')[0];

HamburgerMenu.addEventListener('click', () => {
    containerNavbar.style.display = "inline";
    containerLeft.style.display = "inline";
    containerNavbarResponsive.style.display = "none";
    HamburgerMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="6vw" height="6vw" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;
})

closeMenu.addEventListener('click', ()=> {
    containerNavbar.style.display = "none";
    containerLeft.style.display = "none";
    containerNavbarResponsive.style.display = "inline";
    HamburgerMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="6vw" height="6vw" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>`;
})