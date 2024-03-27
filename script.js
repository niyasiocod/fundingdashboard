const navItems = document.getElementById('navItems');
const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');

const visibleItem = () => {
    navItems.classList.add("active");
    arrowUp.classList.add("active");
    arrowDown.classList.add("active");
}

const disableItem = () => {
    navItems.classList.remove("active");
    arrowUp.classList.remove("active");
    arrowDown.classList.remove("active");
}
