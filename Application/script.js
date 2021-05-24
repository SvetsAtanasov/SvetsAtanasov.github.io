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

function OpenProject1(){
    window.location.href = 'Projects/ARDesigner.html';
}
//#endregion

function SectionFocus(){
}

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
});