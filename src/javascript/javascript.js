// Nav Dropdown
function myFunction() {
    document.getElementById("navDropDown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {

    var dropdowns = document.getElementsByClassName("navDropContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Timeout For Slider
setTimeout(function() {
  $('.heroImg').addClass('zoomOut');
}, 1);

// Controllers for Videos
function openModal() {
  document.getElementById('iFrameModal').style.display = "block";
};

function closeModal() {
  document.getElementById('iFrameModal').style.display = "none";
};



// // Slider that just keeps breaking
// $(document).ready(function() {
//   $('.slickSlider').slick({
//     centerMode: true,
//     centerPadding: '200px',
//     slidesToShow: 1,
//     responsive: [{
//         breakpoint: 768,
//         settings: {
//           // arrows: true,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           // arrows: true,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });

// Slider that only kinda breaks
$(document).ready(function() {
  $('.slickSlider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});


// $(document).ready(function() {
//   $('.slickSlider').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true
//   });
// });


// $('.slickSlider').slick({
//   prevArrow: $('.prev-slide'),
//   nextArrow: $('.next-slide'),
// });
