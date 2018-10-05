window.onscroll = function() {
  myFunction();
};

var header = $(".header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

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
  $("body").addClass("background");
});

$("#portfolio").on("click", () => {
  showPorfolio();
  $("body").removeClass("background");
});
$("#about").on("click", () => {
  showAbout();
  $("body").addClass("background");
});

$(".main").html(showHome());
