//#region OnClickFunctions
function ScrollToAboutMe(){
    var scrollOffset = document.getElementById('aboutMe').offsetTop - document.getElementById('navBar').clientHeight;
    var scroll = window.scrollY;
    window.scrollTo(scroll, scrollOffset);
}

function ScrollToDivProjects(){
    var scrollOffset = document.getElementById('projects').offsetTop - document.getElementById('navBar').clientHeight;
    var scroll = window.scrollY;
    window.scrollTo(scroll, scrollOffset);
}

function ScrollToDivContactMe(){
    var scrollOffset = document.getElementById('contactMe').offsetTop - document.getElementById('navBar').clientHeight;
    var scroll = window.scrollY;
    window.scrollTo(scroll, scrollOffset);
}

function OpenProject1(){
    window.location.href = 'Projects/ARDesigner.html';
}
//#endregion

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

    function FindElements(e){
        let el = document.elementFromPoint(e.clientX, e.clientY);
        console.log(el);

        elements.push(el);
        console.log(elements);
    }

    document.addEventListener('mouseover',FindElements);
});