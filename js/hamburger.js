
function hamburgerToggle(){
    var nav = document.querySelector('nav');
    var hamburger = document.querySelector('.hamburger');
    var plank =  document.querySelector('.plank');

    if(nav.classList.contains('collapse-nav')){
        nav.classList.replace('collapse-nav', 'append-nav')
        plank.classList.replace('hide-plank', 'show-plank')
        hamburger.classList.toggle('change');
    }else if(nav.classList.contains('append-nav')){
       nav.classList.replace('append-nav', 'collapse-nav') 
       plank.classList.replace('show-plank', 'hide-plank')
       hamburger.classList.toggle('change');
    
    }
    
}

function footerText(){
    var d = new Date();
    var year = d.getFullYear();
    var footer = document.querySelector('#powered-by');
    footer.innerHTML = `<h1>Powered by MSSIAIICT 2019 - ${year}`;
}

setTimeout(() => {
    footerText();
}, 100);