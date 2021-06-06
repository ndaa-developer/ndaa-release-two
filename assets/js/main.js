// if ( ($(window).height() + 100) < $(document).height() ) {
//   $('#top-link-block').removeClass('hidden').affix( {
//       // how far to scroll down before link "slides" into view
//       offset: {top:100}					} );
// };
// $('#backToTopBtn').click(function(){
//   $('html,body').animate({scrollTop:0},'slow');return false;
// });
//Get the button:
mybutton = document.getElementById("back2TopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
};
  
document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);