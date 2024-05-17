const menuOpenBtn = document.querySelectorAll('[data-menu-open-btn]');
const menuList = document.querySelectorAll('[data-menu-list]');
const menuCloseBtn = document.querySelectorAll('[data-menu-close-btn]');

const links = document.querySelectorAll('[data-link]');
const overlay = document.querySelector('.overlay');

for(let i = 0; i < menuOpenBtn.length; i++)
{
    const menuCloseFunc = () => {
        menuList[i].classList.remove('active');
        overlay.classList.remove('active');

        if(menuList[i].classList.contains('active'))
        {
            document.body.style.overflow = 'hidden';
        }
        else
        {
            document.body.style.overflowY = "auto"
        }
    }

    menuOpenBtn[i].addEventListener('click', function() {
        menuList[i].classList.add('active');
        overlay.classList.add('active');

        if(menuList[i].classList.contains('active'))
        {
            document.body.style.overflow = 'hidden';
        }
        else
        {
            document.body.style.overflowY = "auto"
        }
    });

    menuCloseBtn[i].addEventListener('click', menuCloseFunc);
    overlay.addEventListener('click', menuCloseFunc);

}




