//#region OnClickFunctions
function ScrollToDivProjects(){
    var element = document.getElementById('projects');
    element.scrollIntoView();
}

function ScrollToDivContactMe(){
    var contactMeDiv = document.getElementById('contactMe');
    contactMeDiv.scrollIntoView();
}

function ScrollToTop(){
    var element = document.getElementById('aboutMe');
    element.scrollIntoView();
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