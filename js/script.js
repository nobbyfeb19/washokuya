// ハンバーガーメニュー制御
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
});
});
/*$(function () {
  //ハンバーガーメニュー（SP）
  $btnMenu = $("#js-btn-menu");
  $gnav = $(".gnav");

  $btnMenu.on("click", function () {
    $btnMenu.toggleClass("active");
    $gnav.toggleClass("show");
    $gnav.animate({ width: "toggle" }, 200);
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest($gnav).length &&
      !$(e.target).closest($btnMenu).length
    ) {
      if ($gnav.hasClass("show")) {
        $gnav.removeClass("show");
        $btnMenu.toggleClass("active");
        $gnav.animate({ width: "toggle" }, 200);
      }
    }
  });
});*/

//スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
