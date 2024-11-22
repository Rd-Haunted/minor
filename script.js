let menu = document.querySelector('#menu_btn');
let navlist = document.querySelector('.headerinner_right_bottom_div');



menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    
}