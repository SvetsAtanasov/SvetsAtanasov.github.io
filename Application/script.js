//#region OnClickFunctions
function ScrollTo(element1OffsetY, element2Y){
    var scroll = window.scrollY;
    var offset = element1OffsetY - element2Y;

    window.scrollTo(scroll, offset);
}

function ScrollToTop(){
    var elementHome = document.getElementById('home');
    elementHome.scrollIntoView();
}

function ScrollToAboutMe(){
    var elementOffsetY = document.getElementById('aboutMe').offsetTop;
    var elementY = document.getElementById('navBar').clientHeight;
    
    ScrollTo(elementOffsetY, elementY);
}

function ScrollToDivProjects(){
    var elementOffsetY = document.getElementById('projects').offsetTop;
    var elementY = document.getElementById('navBar').clientHeight;

    ScrollTo(elementOffsetY, elementY);
}

function ScrollToDivContactMe(){
    var elementOffsetY = document.getElementById('contactMe').offsetTop
    var elementY = document.getElementById('navBar').clientHeight;
    document.getElementById('btnHome').focus();

    ScrollTo(elementOffsetY, elementY);
}
//#endregion

//#region Open Pages (Projects)
function OpenProject1(){
    window.location.href = 'Projects/ARDesigner.html';
}
//#endregion

//#region Section Scroll Button Focus
function SectionFocus(){
    var pageOffset = window.pageYOffset + navBar.clientHeight;

    var navBar = document.getElementById('navBar');
    var aboutMe = document.getElementById('aboutMe');
    var projects = document.getElementById('projects');
    var contactMe = document.getElementById('contactMe');

    var btnHome = document.getElementById('btnHome');
    var btnAboutMe = document.getElementById('btnAboutMe');
    var btnProjects = document.getElementById('btnProjects');
    var btnContactMe = document.getElementById('btnContactMe');
    
    if(pageOffset < aboutMe.offsetTop){
        btnHome.focus();
    }

    else if(pageOffset >= aboutMe.offsetTop && pageOffset < projects.offsetTop){
        btnAboutMe.focus();
    }

    else if(pageOffset >= projects.offsetTop && pageOffset < contactMe.offsetTop){
        btnProjects.focus();
    }

    else{
        btnContactMe.focus();
    }
}
//#endregion

addEventListener('scroll', SectionFocus);

document.addEventListener('DOMContentLoaded', () => {
    let elements = new Array();

    window.onscroll = function(){StickNavBar()};

    var navBar = document.getElementById('table');
    var sticky = navBar.offsetTop;
    console.log(sticky);

    function StickNavBar(){
        if(window.pageYOffset >= sticky){
            navBar.classList.add('sticky');
        }

        else{
            navBar.classList.remove('sticky');
        }
    }

    /*function FindElements(e){
        let el = document.elementFromPoint(e.clientX, e.clientY);
        console.log(el);

        elements.push(el);
        console.log(elements);
    }

    document.addEventListener('mouseover',FindElements);*/


    function CreateElement(){
        var name = 'projects';
        var element = new Element(name);
        console.log(element.getElement());
    }

    CreateElement();
});

class Element{
    constructor(name){
        this.name = name;
    }

    getElement(){
        let element = document.getElementById(this.name).offsetTop;

        return element;
    }
}