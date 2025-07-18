const menu = $('.menu-item-type');
const menuItems = menu.find('.menu-item-link-parent');
const scrollDelay = 3000; // Time delay between automatic slides (in milliseconds)

let isSliding = false; // Flag to prevent multiple slides
let slideInterval; // Variable to store the interval reference
// #########################################
// #########################################


function slideMenu() {
    if (isSliding) return; // Prevent multiple slides

    isSliding = true;

    // Find the index of the currently visible item
    let currentItemIndex = 0;
    let menuWidth = menu.width();
    let scrollLeft = menu.scrollLeft();

    menuItems.each(function (index) {
        const itemWidth = $(this).outerWidth(true);
        if (scrollLeft >= this.offsetLeft && scrollLeft < this.offsetLeft + itemWidth) {
        currentItemIndex = index;
        return false; // Break the loop
        }
    });

    // Determine the index of the next item
    let nextItemIndex = (currentItemIndex + 1) % menuItems.length;

    // Scroll to the next item
    const nextItem = menuItems.eq(nextItemIndex);
    const scrollAmount = menu.scrollLeft() + nextItem.outerWidth(true); // Add next item width 

    menu.animate({
        scrollLeft: scrollAmount
    }, 800, function () {
        // If the next item is the first item, reset the sliding interval
        if (nextItemIndex === 0) {
        clearInterval(slideInterval);
        slideInterval = setInterval(slideMenu, scrollDelay);
        }
        isSliding = false; // Reset sliding flag
    });
}
// Function to start automatic sliding
function startAutomaticSliding() {
    slideInterval = setInterval(slideMenu, scrollDelay);
}

// Start automatic sliding initially
startAutomaticSliding();




$(document).ready(function () {
    $(".menu-item-type-link").on('click', function (event) {
       if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          scrollToSection(hash);
       }
    });
 
    // Highlight active menu item on scroll (optional)
    $(window).scroll(function () {
       var scrollPosition = $(document).scrollTop();
 
       $(".menu-item-type-link").each(function () {
          var hash = this.hash;
          var targetOffset = $(hash).offset().top - 130;
 
          if (scrollPosition >= targetOffset) {
             $(".menu-item-type-link.active").removeClass("active");
             $(this).addClass("active");
 
             // Scroll the menu to center the active link
             scrollMenuToActiveLink();
          }
       });
    });
 
    // Trigger scrollMenuToActiveLink on window resize
    $(window).resize(function () {
       scrollMenuToActiveLink();
    });
 
    function scrollMenuToActiveLink() {
       var activeLink = $(".menu-item-type-link.active")[0];
       var menuWidth = menu.width();
       var linkOffset = activeLink.offsetLeft;
       var scrollTo = Math.max(0, linkOffset - (menuWidth / 2) + 10);
 
       menu.animate({
          scrollLeft: scrollTo
       }, {
          duration: 500,
          queue: false
       });
    }
 
    // Function to scroll to a section
    function scrollToSection(hash) {
       var targetOffset = $(hash).offset().top - 60; // offset
 
       // Use requestAnimationFrame for smoother scrolling
       requestAnimationFrame(() => {
          $('html, body').animate({
             scrollTop: targetOffset
          }, 100);
 
          // Highlight the active menu item after scrolling
          $(".menu-item-type-link.active").removeClass("active");
          $('a[href="' + hash + '"]').addClass("active");
 
          // Scroll the menu to center the active link
          scrollMenuToActiveLink();
       });
    }
 });