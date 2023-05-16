function menuShow() {
    console.log("Clicou no botão!");
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "image/icons8-menu.svg";
    } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "image/icons8-menu.svg";
    }
  }
  