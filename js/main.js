// Check If There's Local Storage Color Option
const color1 = localStorage.getItem("color")

let myarrow = document.querySelector(".fa-arrow-up")

if (color1 !== null) {

    document.documentElement.style.setProperty("--color1", localStorage.getItem("color"));

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // Add Active Class Only On The Selected Element

        if (element.dataset.color === color1) {

            element.classList.add("active");

        }
    });

}

// Random Option
let randomBackground = true;

let theinterval;

// Check If RandomBackground Is In The LocalStorage
let randomlocalstorage = localStorage.getItem("randon_me")

if (randomlocalstorage !== null) {

    if (randomlocalstorage === "true") {

        randomBackground = true

    } else {
        randomBackground = false
    }

    //remove the active class from all span

    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active")
    })

    if (randomlocalstorage === "true") {

        document.querySelector(".random-backgrounds .yes").classList.add("active")

    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active")
    }

}

// Toggle Spin Class On My Icun
let settings_box = document.querySelector(".settings-box");

document.querySelector(".fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    settings_box.classList.toggle("show");
}

//Swich Colors
let My_li = document.querySelectorAll(".colors-list li")

My_li.forEach(li => {

    li.addEventListener("click", (e) => {

        settings_box.classList.toggle("show")

        // Set The Color
        document.documentElement.style.setProperty("--color1", e.target.dataset.color)

        //Set The Color On Local Storage
        localStorage.setItem("color", e.target.dataset.color);

        // Add Active Class On The Selected Element
        handelactive(e);
    })
})


//Swich Background Option
let random_background = document.querySelectorAll(".random-backgrounds span")

random_background.forEach(span => {

    span.addEventListener("click", (e) => {

        settings_box.classList.toggle("show")

        // Add Active Class On The Selected Element
        handelactive(e)

        if (e.target.dataset.background === "yes") {

            randomBackground = true;

            random()

            localStorage.setItem("randon_me", true)

        } else {
            randomBackground = false;

            clearInterval(theinterval);

            localStorage.setItem("randon_me", false)
        }


    })
})

// Select Linding Page
const page = document.querySelector(".landing-page")

// Get Array Of Images
const img = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]

page.style.backgroundImage = 'url(images/02.jpg)';

function random() {

    if (randomBackground === true) {


        theinterval = setInterval(() => {
            //Random Number
            const random = Math.floor(Math.random() * img.length);

            //Change Background Landing Page
            page.style.backgroundImage = 'url("images/' + img[random] + '")';

        }, 7000)

    }
}

random()

// select the skills selector
let ourskills = document.querySelector(".skills");

window.onscroll = function () {

    // get skills offset top
    let skillsoffset = ourskills.offsetTop;

    if (this.pageYOffset >= skillsoffset) {

        // get all skills span
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");

        allskills.forEach(skill => {


            skill.style.width = skill.dataset.progress;
        })

    } else {

        let allskills = document.querySelectorAll(".skill-box .skill-progress span");



        allskills.forEach(skill => {


            skill.style.width = 0;
        })

    }

    // Show The Arrow-up If Window scrollY Is >= 700 
    if (this.pageYOffset >= 700 && document.querySelector(".nav-bullets").style.display == "none") {

        myarrow.style.display = "block"

    } else {
        myarrow.style.display = "none"
    }

}


myarrow.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

//creat popup
let ourgallery = document.querySelectorAll(".gallery img");

ourgallery.forEach(img => {

    img.addEventListener("click", (e) => {

        //creat overlay elemnt
        let overlay = document.createElement("div");

        //add the class to overlay
        overlay.className = "popup-overlay";

        //append the over lay to body
        document.body.appendChild(overlay);

        //creat the popup-box
        let popupbox = document.createElement("div")

        //add the class to popup-box
        popupbox.className = "popup-box";

        //creat the image
        let popupimg = document.createElement("img");

        //set the image source here
        popupimg.src = img.src;

        // add the image to popup-box
        popupbox.appendChild(popupimg)

        //add the popup-box to body
        document.body.appendChild(popupbox);

        //add the allt on the img if it dosen't have allt
        if (img.alt !== null) {

            //creat headingimg
            let imgheading = document.createElement("h3")

            //creat text for headingimg
            let headtext = document.createTextNode(img.alt)

            // append the headtext to headingimg
            imgheading.appendChild(headtext)

            // append the headingimg to popup-box
            popupbox.appendChild(imgheading)
        }


        //creat the close span
        let closespan = document.createElement("span")

        //creat the close button text
        let closebuttontext = document.createTextNode("x")

        // append the close button text to close span
        closespan.appendChild(closebuttontext)

        //add the class to closespan
        closespan.className = "closespan";

        // append the closespan to popup-box
        popupbox.appendChild(closespan)

        //close the popup
        document.addEventListener("click", function (e) {

            if (e.target.className == "closespan") {

                //remove the curent popup
                e.target.parentNode.remove()

                //remove the overlay
                document.querySelector(".popup-overlay").remove()
            }
        })
    })
})

// select all my links
let alllinks = document.querySelectorAll(".links a")

let allbullet = document.querySelectorAll(".nav-bullets .bullet")

function scrollToElement(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            handelactive(e);
            
            list.classList.toggle("open");
            
            menu.classList.toggle("menu-active")

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth"

            })

        })
    })
}
scrollToElement(allbullet)
scrollToElement(alllinks)

//handel active class
function handelactive(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active")
    });

    ev.target.classList.add("active")
}

let bulletsspan = document.querySelectorAll(".bullets-option span")

let navbullet = document.querySelector(".nav-bullets");

let bulletlocalstorage = localStorage.getItem("bullets")

if (bulletlocalstorage !== null) {

    bulletsspan.forEach(span => {


        span.classList.remove("active");

        if (bulletlocalstorage === "block") {

            navbullet.style.display = 'block';

            document.querySelector(".bullets-option .yes").classList.add("active");




        } else {
            navbullet.style.display = 'none';
            document.querySelector(".bullets-option .no").classList.add("active");




        }
    })
}



bulletsspan.forEach(span => {

    span.addEventListener("click", (e) => {

        settings_box.classList.toggle("show");

        if (span.dataset.display === "show") {

            navbullet.style.display = 'block';

            localStorage.setItem("bullets", "block")

        } else {
            navbullet.style.display = 'none';
            localStorage.setItem("bullets", "none")
        }

        handelactive(e)
    })


})

// clear my localstorage
document.querySelector(".reset-options").onclick = function () {

    settings_box.classList.toggle("show");

    localStorage.clear();

    window.location.reload()
}

// toggle menu
let menu = document.querySelector(".toggle-menu");
let list = document.querySelector(".list");

menu.onclick = function (e) {

    e.stopPropagation()

    this.classList.toggle("menu-active")

    list.classList.toggle("open")
}

//click any where to hidden my menu
document.addEventListener("click", (e) => {

    if (e.target !== menu && e.target !== list) {

        //check if menu is open

        if (list.classList.contains("open")) {


            menu.classList.toggle("menu-active")

            list.classList.toggle("open")
        }

    }
})

list.onclick = function (e) {

    e.stopPropagation()
}
