let menu = document.querySelector('.toggle_btn');
let navlist = document.querySelector('.headerinner_right_bottom_div');

menu.onclick = () => {
    if(menu = 1){
        navlist.style.right=0;
    }else if (menu = 0){
        navlist.style.right=`${-100}%`;
    }
    
}

