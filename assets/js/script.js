$(document).ready(function () {


  var loginCheck = localStorage.getItem("entered");
  if (loginCheck == "true") {
    $(".login").prop('href', '#');
    $(".login")[0].innerText = "پروفایل کاربری";
    $(".login").addClass("dropdown-toggle");
    $(".login").prop('role', 'button');
    $(".login").prop('data-bs-toggle', 'dropdown');
    $(".login").prop('aria-expanded', 'false');

    $(".login").mouseover(function () {
      $(".login-user-dropdown").removeClass("visually-hidden");
    });
    $(".login").click(function () {
      $(".login-user-dropdown").removeClass("visually-hidden");
    });
    $(".login-user-dropdown").mouseleave(function () {
      $(".login-user-dropdown").addClass("visually-hidden");
    });

    // $("#userProfileBasketShow").click(function (e) {
    //   window.location = 'finalBasket.html';
    // })

    $("#userProfileLogout").click(function (e) {
      debugger;
      localStorage.setItem("entered", "false");
      window.location = 'homePage.html';
    })
  }
  else {
    $(".login").prop('href', '../roja new/login.html');
    $(".login-user-dropdown").addClass("visually-hidden");
    // window.location = 'homePage.html';
  }

  $("#rojaLogo").click(function () {
    window.location = 'homePage.html';
  })

  // باز شدن منوی -دسته بندی محصولات- با حرکت موس
  $("#navbarDropdown").mouseover(function () {
    $(".products-categorize-dropdown").removeClass("visually-hidden");
  });
  $("#navbarDropdown").click(function () {
    $(".products-categorize-dropdown").removeClass("visually-hidden");
  });
  $(".products-categorize-dropdown").mouseleave(function () {
    $(".products-categorize-dropdown").addClass("visually-hidden");
  });
  //





});