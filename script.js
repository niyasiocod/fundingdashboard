const navSettingsItems = document.getElementById('navSettingsItems');
const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');


const navbar = document.getElementsByClassName('navbar')[0];
const navbarItems = document.getElementsByClassName('navbar-items')[0];
const navbarTitle = document.getElementsByClassName('navbar-title');
const main = document.getElementsByTagName('main')[0];
const minimizerLogoContainer = document.getElementsByClassName('minimizer-logo-container')[0];
const arrowContainer = document.getElementsByClassName('arrow-container')[0];


let n=1;
const navToggle = () => {
    navSettingsItems.classList==='active' ? navSettingsItems.classList.remove("active") : navSettingsItems.classList.remove("active");

    if(n%2===0){
        minimizerLogoContainer.classList.remove("navToggle");
        navbar.classList.remove("navToggle");
        navbarItems.classList.remove("navToggle");
        main.classList.remove("navToggle");
        arrowContainer.classList.remove("navToggle");
        for(let i =0; i<navbarTitle.length; i++){
            navbarTitle[i].classList.remove("navToggle");
        }
    }else{
        minimizerLogoContainer.classList.add("navToggle");
        navbar.classList.add("navToggle");
        navbarItems.classList.add("navToggle");
        main.classList.add("navToggle");
        arrowContainer.classList.add("navToggle");
        for(let i =0; i<navbarTitle.length; i++){
            navbarTitle[i].classList.add("navToggle");
        }
    }
    
    n++;
}

// const visibleItem = () => {
//     navSettingsItems.classList.add("active");
//     arrowUp.classList.add("active");
//     arrowDown.classList.add("active");

// }

// const disableItem = () => {
//     navSettingsItems.classList.remove("active");
//     arrowUp.classList.remove("active");
//     arrowDown.classList.remove("active");
// }

let x=1;
const navSettingsToggle = () =>{
    if(x%2 != 0){
        navSettingsItems.classList.add("active");
        arrowUp.classList.add("active");
        arrowDown.classList.add("active");
    }else{
        navSettingsItems.classList.remove("active");
        arrowUp.classList.remove("active");
        arrowDown.classList.remove("active");
    }
    x++;
}