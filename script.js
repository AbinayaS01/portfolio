//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    //remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    

// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Web Developer', 'App Developer','Machine Learning Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleVisibility() {
    var paragraph = document.getElementById("extra");
    paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
    var readLine = document.getElementById('read');
    readLine.style.display=(paragraph.style.display === 'block') ? 'none' : 'inline-block' ; }

    function webToggle() {
    var points1 = document.getElementById("points1");
    var paragraph1 = document.getElementById("extra1");
    var readLine1 = document.getElementById('read1');

    if (points1.style.display === "none") {
 
        // Hide the text between the span
        // elements
        paragraph1.style.display = "none";

        // Show the dots after the text
        points1.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        readLine1.innerHTML = "Read More";
    }
    else {
 
        // Show the text between the
        // span elements
        paragraph1.style.display = "inline";

        // Hide the dots after the text
        points1.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        readLine1.innerHTML = "Read Less";
    }
    // paragraph1.style.display = (paragraph1.style.display === "none") ? "block" : "none";
    // readLine1.style.display=(paragraph1.style.display === 'block') ? 'none' : 'inline-block' ; 
}
    
function appsToggle() {
    var points2 = document.getElementById("points2");
    var paragraph2 = document.getElementById("extra2");
    var readLine2 = document.getElementById('read2');

    if (points2.style.display === "none") {
 
        // Hide the text between the span
        // elements
        extra2.style.display = "none";

        // Show the dots after the text
        points2.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        read2.innerHTML = "Read More";
    }
    else {
 
        // Show the text between the
        // span elements
        extra2.style.display = "inline";

        // Hide the dots after the text
        points2.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        read2.innerHTML = "Read Less";
    }
    // paragraph2.style.display = (paragraph2.style.display === "none") ? "block" : "none";
    // readLine2.style.display=(paragraph2.style.display === 'block') ? 'none' : 'inline-block' ; 
}

function mlToggle() {
    var points3 = document.getElementById("points3");
    var paragraph3 = document.getElementById("extra3");
    var readLine3 = document.getElementById('read3');

    if (points3.style.display === "none") {
 
        // Hide the text between the span
        // elements
        paragraph3.style.display = "none";

        // Show the dots after the text
        points3.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        readLine3.innerHTML = "Read More";
    }
    else {
 
        // Show the text between the
        // span elements
        paragraph3.style.display = "inline";

        // Hide the dots after the text
        points3.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        readLine3.innerHTML = "Read Less";
    }
    // paragraph3.style.display = (paragraph3.style.display === "none") ? "block" : "none";
    // readLine3.style.display=(paragraph3.style.display === 'block') ? 'none' : 'inline-block' ; 
}