// removed for client demo
// // alerts section functions
// window.onload = function () //executes when the page finishes loading
// {
//   setTimeout(func1, 2000); //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.

//   // setTimeout(func2, 10000); //sets a timer which calls function func1 after 10,000 milliseconds = 10 secs.
// };

// function func1() {
//   document.getElementById("alert-section").className = "show";
// }
// // function to remove element
// // function func2() {
// //   document.getElementById("alert-section").className = "hide";
// // }

// carousel script for testing
$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    let $e = $(e.relatedTarget);
    let idx = $e.index();
    let itemsPerSlide = 3;
    let totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      let it = itemsPerSlide - (totalItems - idx);
      for (let i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item").eq(i).appendTo(".carousel-inner");
        } else {
          $(".carousel-item").eq(0).appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});
