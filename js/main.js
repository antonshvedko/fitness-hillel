let menu = document.querySelector('.menu-opener');
if (typeof menu !== 'undefined') {
    menu.addEventListener('click', () => {
        let header = document.querySelector('.header');
        console.log(menu);
        if (typeof header !== 'undefined') {
            if (!header.classList.contains('.mobile-menu-active')) {
                header.classList.add('mobile-menu-active');
            } else {
                header.classList.remove('mobile-menu-active');
            }
        }
    });
}