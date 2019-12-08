function pageUp() {
    window.scrollTo(0,0);
}

function showMenu() {
    dropDown = document.getElementById('header-navigation-panel-min');

    if (dropDown.style.display === 'block') {
        dropDown.style.display = 'none';
    } else {
        dropDown.style.display = 'block';
    }
}