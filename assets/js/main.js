// cuộn khi kéo xuống
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
} 
// responsive mobile menu
var header = document.getElementById("header");
    var mobileMenu = document.getElementById("mobile-menu");
    var headerHeight = header.clientHeight;
    mobileMenu.onclick = function () {
      var isClose = header.clientHeight === headerHeight;
      if (isClose) {
        header.style.height = "auto";
      } else {
        header.style.height = null;
      }
    };  
// tự động đóng menu
var menuItems = document.querySelectorAll('#myNavbar ul li a[href*="#"]')//lấy tất cả giá trị của href có #
    for (var i = 0; i < menuItems.length; i++) {
      var menuItem = menuItems[i];
      menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling //&& this.nextElementSibling.classList.contains('menucon');//+ menucon
        if (isParentMenu) {
          event.preventDefault();
        }
        else {
          header.style.height = null;
        }
      }
    }

