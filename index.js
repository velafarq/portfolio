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
});

$("#portfolio").on("click", () => {
  showPorfolio();
});
$("#about").on("click", () => {
  showAbout();
});

$(".main").html(showHome());
