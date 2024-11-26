let menu = document.querySelector('.toggle_btn');
let navlist = document.querySelector('.headerinner_right_bottom_div');

menu.onclick = () => {
    navlist.classList.toggle('Active');
}

