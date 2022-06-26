    const navBtn = document.getElementById('nav-btn');
    const navBar = document.getElementById('navbar');
    const navclose = document.getElementById('nav-close');

    navBtn.addEventListener('click', function(){
        navBar.classList.add('showNav ');
    })

    navclose.addEventListener('click', function(){
        navBar.classList.remove('showNav');
    })