

document.getElementById("navbar-toggle").addEventListener("click", function () {
  const navbarMenu = document.getElementById("navbar-menu");
  navbarMenu.classList.toggle("active");
  const navbarToggle = document.getElementById("navbar-toggle");
  navbarToggle.classList.toggle("active");
});
  
let menuLinks = document.querySelectorAll('.menu-link');

  menuLinks.forEach(function(link){
    link.addEventListener('click', function(event) {
      const navbarMenu = document.getElementById("navbar-menu");
      navbarMenu.classList.remove("active");
      const navbarToggle = document.getElementById("navbar-toggle");
      navbarToggle.classList.remove("active");
    });
  });
  const header = document.getElementById('header');
  const navbar = document.getElementById('navbar-menu');
  const lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageXOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop) {
      // when user scrolls header get more transparent so we can se content through the navbar and header
      header.classList.add('header-transparent');
      navbar.classList.add('navbar-transparent');
    } else {
      if (currentScroll <= 0 || lastScrollTop <= 100) {
        // when user scrolls to the top, it returns to original color
        header.classList.remove('header-transparent');
        navbar.classList.remove('navbar-transparent');
      }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  //Function to create a "To top" button
  // button shows only when it is 200px left from bottom of page, then we add style display block for button
  // If user scrolls up on the page again, button will display none
document.addEventListener("DOMContentLoaded",function(){
  const scrollToTop = document.getElementById("top-button");

  window.onscroll = function(){
    const scrollPositionToShowBtn = document.body.scrollHeight - window.innerHeight - 200;

    if(document.body.scrollTop > scrollPositionToShowBtn || document.documentElement.scrollTop > scrollPositionToShowBtn){
      scrollToTop.style.display = "block";
    }else {
      scrollToTop.style.display = "none";
    }
  };
 // This function is waiting for a click and when button is clicked it will scroll to the top of the page
  scrollToTop.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
//Function for contact page to send message and close message box
function showMessage() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

function closeMessage() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}
//Toggle button for project page to flip the card
function toggleFlip(button) {
  const card = button.closest('.place-holder');
  card.classList.toggle('flip');
};

  //Animation for header text to show on scroll on index page
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback);
  const hiddenText = document.querySelector('.latest-projects h1');

  observer.observe(hiddenText);

  document.addEventListener('DOMContentLoaded', function () {
    //Create a array for modalobjects
    const modals = [
        { openButton: '#open-button1', closeButton: '.close-button1', modalId: 'modal1' },
        { openButton: '#open-button2', closeButton: '.close-button2', modalId: 'modal2' },
        { openButton: '#open-button3', closeButton: '.close-button3', modalId: 'modal3' },
    ];

    //Create a foreach loop to every modalobject
    modals.forEach(modalObj => {
        const openButton = document.querySelector(modalObj.openButton);
        const closeButton = document.querySelector(modalObj.closeButton);
        const modal = document.getElementById(modalObj.modalId);

        // Add a eventlistener on click to show modal
        openButton.addEventListener('click', () => {
            modal.showModal();
        });

        // Add a eventlistener on click to close modal
        closeButton.addEventListener('click', () => {
            modal.close();
        });
    });
});
//Function for read more inside web guidelines page
function showText(button) {
  const additionalText = button.nextElementSibling;

  if (additionalText.style.display === 'flex') {
      additionalText.style.display = 'none';
      button.textContent = 'Läs mer';
  } else {
      additionalText.style.display = 'flex';
      button.textContent = 'Stäng';
  }
}