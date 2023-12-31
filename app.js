// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");
const linksContent = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener("click", () => {
    // linksContent.classList.toggle("show-links");

    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContent.getBoundingClientRect().height;

    if( containerHeight === 0){
        linksContent.style.height = `${linksHeight}px`;
    }else{
        linksContent.style.height = 0;
    }
});



// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    const navbarHeight = navbar.getBoundingClientRect().height;

   if( scrollHeight > navbarHeight){
        navbar.classList.add("fixed-nav");
   }else{
    navbar.classList.remove("fixed-nav");
   }

    //    show top icon here now
    if( scrollHeight > 400){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }

});

// ********** smooth scroll ************
// select links


const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {

    link.addEventListener("click", (e) => {
        // prevent default here
        e.preventDefault();

        // Navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);

        const element = document.getElementById(id);

        // get parent elements here

        const linksHeight = links.getBoundingClientRect().height;
        const containerHeight = linksContent.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav");

        let position = element.offsetTop - linksHeight;

        if(!fixedNav){
            position = position - linksHeight;
        }

        if( linksHeight > 100){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        // close here
        linksContent.style.height = 0;

    });
});
