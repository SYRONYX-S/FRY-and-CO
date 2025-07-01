// Designed and developed by SYRONYX Web and App Solutions

// Modal 1 End

// Function to toggle between one card per line and two cards per line
function toggleGridLayout() {
   const menuItemsRow = document.querySelector('.menu-items-row');
   const menuItemInner = document.querySelectorAll('.menu-item-inner');
   const menuItems = document.querySelectorAll('.menu-item-card');
   const menuItemImage = document.querySelectorAll('.menu-item-image');
   const menuItemDetails = document.querySelectorAll('.menu-item-details');
   const listIcon = document.querySelector('.list-icon');
   const gridIcon = document.querySelector('.grid-icon');

   // Toggle flex display on menu-item-inner
   menuItemInner.forEach(item => {
      item.style.display === 'block' ? item.style.display = 'flex' : item.style.display = 'block';
   });

   // Toggle grid layout class on the menu items row
   menuItemsRow.classList.toggle('single-column-layout');

   // Toggle grid classes on each menu item card
   menuItems.forEach(item => {
      item.classList.toggle('col-6');
      item.classList.toggle('col-lg-3');
      item.classList.toggle('col-md-6');
      item.classList.toggle('col-sm-6');
   });

   // Toggle grid classes on menu-item-image and menu-item-details
   menuItemImage.forEach(item => {
      item.classList.toggle('col-5');
      item.classList.toggle('col-lg-4');
      item.classList.toggle('full-width-image');
   });

   menuItemDetails.forEach(item => {
      item.classList.toggle('col-7');
      item.classList.toggle('col-lg-8');
   });

   // Toggle icon visibility based on the layout
   if (menuItemsRow.classList.contains('single-column-layout')) {
      gridIcon.style.display = 'inline-block';
      listIcon.style.display = 'none';
   } else {
      gridIcon.style.display = 'none';
      listIcon.style.display = 'inline-block';
   }
}

// Event listener for the toggle button
document.getElementById('gridToggleBtn').addEventListener('click', function () {
   toggleGridLayout();
});

$(document).ready(function () {
   // Function to handle menu sticking to the top
   const stickyMenuOffset = menu.offset().top;
   const stickyDistance = -32; // Desired distance from the top when sticky
   const contentSection = $('.first-menu-section');

   $(window).scroll(function () {
      const scrollPosition = $(window).scrollTop();

      if (scrollPosition > stickyMenuOffset - stickyDistance) {
         menu.addClass('sticky');
         contentSection.css('padding-top', '158px');
         clearInterval(slideInterval); // Stop automatic sliding when navbar becomes sticky
      } else {
         menu.removeClass('sticky');
         contentSection.css('padding-top', '0px');
         if (!isSliding) {
            clearInterval(slideInterval); // Clear existing interval
            slideInterval = setInterval(slideMenu, scrollDelay); // Resume automatic sliding
         }
      }
   });
});

document.addEventListener("DOMContentLoaded", function () {
   // Hide preloader and show content when the page is fully loaded
   window.addEventListener("load", function () {
      const preloader = document.querySelector(".preloader");
      const content = document.querySelector(".main-content");

      // Hide preloader
      preloader.style.display = "none";

      // Show content
      content.style.display = "block";
   });
});

var btn = $('#back-to-top');
var btn_2 = $('#whtspp_icon');

$(window).scroll(function () {
   if ($(window).scrollTop() > 20) {
      btn.addClass('show');
      btn_2.addClass('show');
   } else {
      btn.removeClass('show');
      btn_2.removeClass('show');
   }
});

btn.on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
      scrollTop: 0
   }, '20');
});

$(document).ready(function () {
   $(".menu-item-link-parent").on('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the href attribute of the link inside the clicked menu-item-link-parent
      var target = $(this).find('.menu-item-type-link').attr('href');

      // Define the offset value (in pixels)
      var offset = 60; // offset

      // Scroll to the corresponding section with offset
      $('html, body').animate({
         scrollTop: $(target).offset().top - offset
      }, 100); //  duration
   });
});

// Modal 1 Start
function openModal(modalId) {
   const dialog = document.getElementById(modalId); // Get the modal by ID
   if (dialog) { // Check if the modal element exists
      dialog.showModal();
      // Add event listener to close the modal when clicking outside
      dialog.addEventListener('click', function (event) {
         if (event.target === dialog) {
            closeModal();
         }
      });
   } else {
      console.error("Modal with ID", modalId, "not found!"); // Error handling for missing modal
   }
}

function closeModal() {
   const openModals = document.querySelectorAll('dialog:not([hidden])'); // Get all visible modals
   if (openModals.length > 0) {
      for (const modal of openModals) {
         modal.close(); // Close each modal in the list
      }
   }
}

// View Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewToggleBtn = document.querySelector('.view-toggle-btn');
    const menuSections = document.querySelectorAll('.menu-section');
    let isGridView = true;

    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', function() {
            isGridView = !isGridView;
            menuSections.forEach(section => {
                const itemsContainer = section.querySelector('.menu-items-container');
                if (isGridView) {
                    itemsContainer.classList.remove('list-view');
                    itemsContainer.classList.add('grid-view');
                    viewToggleBtn.innerHTML = '<i class="fas fa-list"></i> List View';
                } else {
                    itemsContainer.classList.remove('grid-view');
                    itemsContainer.classList.add('list-view');
                    viewToggleBtn.innerHTML = '<i class="fas fa-th-large"></i> Grid View';
                }
            });
        });
    }

    // Initialize with grid view
    menuSections.forEach(section => {
        const itemsContainer = section.querySelector('.menu-items-container');
        itemsContainer.classList.add('grid-view');
    });
});
