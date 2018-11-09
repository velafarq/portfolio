const showHome = () => {
  $(".main").empty();
  $(".main").append(home_template);
};

const showAbout = () => {
  $(".main").empty();
  $(".main").append(about_template);
};

const showPorfolio = () => {
  $(".main").empty();

  $(".main").append(portfolio_template);
};

const showConnect = () => {
  $(".main").empty();
  $(".main").append(connect_template);
};

$("#home").on("click", () => {
  showHome();
});

$("#portfolio").on("click", () => {
  showPorfolio();
});
$("#about").on("click", () => {
  showAbout();
});

$(".main").html(showHome());

$(".sub-section").click(function(event) {
  event.preventDefault();
});

window.onscroll = function() {
  myFunction();
};

// Get the header
const header = document.getElementById("header");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("box-shadow");
  } else {
    header.classList.remove("box-shadow");
  }
}
