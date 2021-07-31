

// Popup 1
var openpopup = document.querySelector('#popup-btn')
var closepopup = document.querySelector('.popup-close-btn')

openpopup.addEventListener("click", function () {
    document.body.classList.add("popup-active")
});

closepopup.addEventListener("click", function () {
    document.body.classList.remove("popup-active")
});

// Popup 2
var openpopup2 = document.querySelector('#popup-btn2')
var closepopup2 = document.querySelector('.popup-close-btn2')

openpopup2.addEventListener("click", function () {
    document.body.classList.add("popup-active2")
});

closepopup2.addEventListener("click", function () {
    document.body.classList.remove("popup-active2")
});

// Popup 3
var openpopup3 = document.querySelector('#popup-btn3')
var closepopup3 = document.querySelector('.popup-close-btn3')

openpopup3.addEventListener("click", function () {
    document.body.classList.add("popup-active3")
});

closepopup3.addEventListener("click", function () {
    document.body.classList.remove("popup-active3")
});
// Popups End 

// Scroll Btn
const scrollbtn = document.querySelector('.scroll-btn')
window.addEventListener('scroll', () => {
    if (document.body.scrollTop >800 || document.documentElement.scrollTop > 800) {
        scrollbtn.style.display = "block"
    }
    else {
        scrollbtn.style.display = "none"
    }
})
scrollbtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
}
)

// Light theme Adjust
var click = 0;
function theme() {
    if (click == 0) {
        // Navbar Change Styleing
        click = 1;
        document.getElementById('navbar').setAttribute("style", "background-color:var(--pure);")
        document.getElementById('nav-icon').setAttribute("style", "color:var(--black);")
        document.getElementById('mr-logo').setAttribute("style", "color:var(--black)")
        document.getElementById('back-colr').setAttribute("style", "background-color:var(--pure);")

        var element = document.getElementsByClassName('change');
        for (var x = 0; x < element.length; x++) {
            element[x].setAttribute("style", "color:var(--black)")
        }

        // Scroll Btn
        document.getElementById('icon').setAttribute("style", "background-color:var(--scroll);")

        // Develop Div Change Styleing
        document.getElementById('deve').setAttribute("style", "background-color:var(--pure);")
        var Develop = document.getElementsByClassName('style-js');
        for (var i = 0; i < Develop.length; i++) {
            Develop[i].setAttribute("style", "color:var(--black)")

            document.getElementById('image1').src = "images/Javascript Images/image1.png"
            document.getElementById('image2').src = "images/Javascript Images/image2.png"
        }
        // About Div Styleing
        document.getElementById('style-about').setAttribute("style", "background-color:var(--pure);")
        var about = document.getElementsByClassName('about-css');
        for (var a = 0; a < about.length; a++) {
            about[a].setAttribute("style", "color:var(--black)")
        }
        document.getElementById('who-css').setAttribute("style", "color:var(--red);")


        // Service Div Styleing
        document.getElementById('service-style').setAttribute("style", "background-color:var(--pure);")
        var service = document.getElementsByClassName('style');
        for (var b = 0; b < service.length; b++) {
            service[b].setAttribute("style", "color:var(--black)")
        };
        var back = document.getElementsByClassName('change-card')
        for (var c = 0; c < back.length; c++) {
            back[c].setAttribute("style", "background:color:var(--pure)")


            document.getElementById('shadow').classList.add('card-shadow')
            document.getElementById('shadow1').classList.add('card-shadow')
            document.getElementById('shadow2').classList.add('card-shadow')

            document.getElementById('cont-shadow1').classList.add('shadow1')
            document.getElementById('cont-shadow2').classList.add('shadow2')
            document.getElementById('cont-shadow3').classList.add('shadow3')
        };

        // Portfolio div Styleing
        document.getElementById('portfolio-id').setAttribute("style", "background-color:var(--pure); color:var(--black)")
        document.getElementById('port-js1').classList.add('port-style')
        document.getElementById('port-js2').classList.add('port-style')
        document.getElementById('port-js3').classList.add('port-style')

        document.images["2"].setAttribute("style", "background-color:var(--pure); border-bottom: 2px solid var(--red);box-shadow: 0px 0px 13px -3px grey;")
        document.images["3"].setAttribute("style", "background-color:var(--pure); border-bottom: 2px solid var(--red);box-shadow: 0px 0px 13px -3px grey;")
        document.images["4"].setAttribute("style", "background-color:var(--pure); border-bottom: 2px solid var(--red);box-shadow: 0px 0px 13px -3px grey;")

        document.getElementById('btn-more').classList.add('btn-extra')

        // Contact Div Styleing
        document.getElementById('contact-style').setAttribute("style", "background-color:var(--pure); color:var(--black)")

        document.getElementById('cont-same1').classList.add('style-cont')
        document.getElementById('cont-same2').classList.add('style-cont1')
        document.getElementById('cont-same3').classList.add('style-cont2')

        // Footer Styleing
        document.getElementById('footer-extra').setAttribute("style", "background-color:var(--pure); color:var(--black)")




        //    PopupStyleing
        document.getElementById('popupchange1').setAttribute("style", "background-color:var(--pure);")
        document.getElementById('hire1').setAttribute("style", "color:var(--black);")

        document.getElementById('popupchange2').setAttribute("style", "background-color:var(--pure);")
        document.getElementById('hire2').setAttribute("style", "color:var(--black);")

        document.getElementById('popupchange3').setAttribute("style", "background-color:var(--pure);")
        document.getElementById('hire3').setAttribute("style", "color:var(--black);")



    }



    else if (click == 1) {
        // Navbar Change Styleing
        click = 0;
        document.getElementById('navbar').setAttribute("style", "background-color:var(--black);")
        document.getElementById('mr-logo').setAttribute("style", "color:var(--pure)")
        document.getElementById('back-colr').setAttribute("style", "background-color:var(--black);")
        document.getElementById('nav-icon').setAttribute("style", "color:var(--pure);")
        var element = document.getElementsByClassName('change');
        for (var x = 0; x < element.length; x++) {
            element[x].setAttribute("style", "color:var(--pure)")
        }

        // Scroll Btn
        document.getElementById('icon').setAttribute("style", "background-color:var(--grey);")


        // Develop Div Change Styleing
        document.getElementById('deve').setAttribute("style", "background-color:var(--black);")
        var Develop = document.getElementsByClassName('style-js');
        for (var i = 0; i < Develop.length; i++) {
            Develop[i].setAttribute("style", "color:var(--pure)")

            document.getElementById('image1').src = "images/portfolio/image1.png"
            document.getElementById('image2').src = "images/portfolio/image2.png"

        }
        // About Div Styleing
        document.getElementById('style-about').setAttribute("style", "background-color:var(--black);")
        var about = document.getElementsByClassName('about-css');
        for (var a = 0; a < about.length; a++) {
            about[a].setAttribute("style", "color:var(--pure)")
        }
        document.getElementById('who-css').setAttribute("style", "color:var(--red);")

        // Service Div Styleing
        document.getElementById('service-style').setAttribute("style", "background-color:var(--black);")
        var service = document.getElementsByClassName('style');
        for (var b = 0; b < service.length; b++) {
            service[b].setAttribute("style", "color:var(--pure)")
        };
        var back = document.getElementsByClassName('change-card')
        for (var c = 0; c < back.length; c++) {
            back[c].setAttribute("style", "background-color:var(--grey)")


            document.getElementById('shadow').classList.remove('card-shadow')
            document.getElementById('shadow1').classList.remove('card-shadow')
            document.getElementById('shadow2').classList.remove('card-shadow')

            document.getElementById('cont-shadow1').classList.remove('shadow1')
            document.getElementById('cont-shadow2').classList.remove('shadow2')
            document.getElementById('cont-shadow3').classList.remove('shadow3')
        };

        // Portfolio div Styleing
        document.getElementById('portfolio-id').setAttribute("style", "background-color:var(--black); color:var(--pure)")
        document.getElementById('port-js1').classList.remove('port-style')
        document.getElementById('port-js2').classList.remove('port-style')
        document.getElementById('port-js3').classList.remove('port-style')

        document.images["2"].setAttribute("style", "background-color:var(--grey); border-bottom: 0px solid var(--red);box-shadow: 0px 0px 0px 0px;")
        document.images["3"].setAttribute("style", "background-color:var(--grey); border-bottom: 0px solid var(--red);box-shadow: 0px 0px 0px 0px;")
        document.images["4"].setAttribute("style", "background-color:var(--grey); border-bottom: 0px solid var(--red);box-shadow: 0px 0px 0px 0px;")

        document.getElementById('btn-more').classList.remove('btn-extra')

        // Contact Div Styleing
        document.getElementById('contact-style').setAttribute("style", "background-color:var(--black); color:var(--pure)")

        document.getElementById('cont-same1').classList.remove('style-cont')
        document.getElementById('cont-same2').classList.remove('style-cont1')
        document.getElementById('cont-same3').classList.remove('style-cont2')

        // Footer Extra
        document.getElementById('footer-extra').setAttribute("style", "background-color:var(--grey); color:var(--pure)")



        //    PopupStyleing

        document.getElementById('popupchange1').setAttribute("style", "background-color:var(--grey);")
        document.getElementById('hire1').setAttribute("style", "color:var(--pure);")

        document.getElementById('popupchange2').setAttribute("style", "background-color:var(--grey);")
        document.getElementById('hire2').setAttribute("style", "color:var(--pure);")

        document.getElementById('popupchange3').setAttribute("style", "background-color:var(--grey);")
        document.getElementById('hire3').setAttribute("style", "color:var(--pure);")





    }
}






