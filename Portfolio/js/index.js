$(function () {
  $("#gotop").click(function () {
      jQuery("html,body").animate({
          scrollTop: 0
      }, 500);
  });
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('#gotop').fadeIn("fast");
      } else {
          $('#gotop').stop().fadeOut("fast");
      }
  });
});



//錨點滑動

$(document).ready(function () {
  $("a").on("click", function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash; //抓取網頁#錨點
          console.log(hash);
          $("html,body").animate(
              {
                  scrollTop: $(hash).offset().top
              },
              800
          );
      }
  });
});




//主選單往下滾動變化
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 700) {
      document.getElementById("header-fixed").style.background = '#00000080';
      document.getElementById("header-fixed").style.marginTop = '0';
      document.getElementById("header-fixed").style.height = '75px';
      document.getElementById("header-fixed").style.marginLeft = '0';
      document.getElementById("header-fixed").style.width = '100vw';
      document.getElementById("header-fixed").style.boxShadow = '';
      document.getElementById("header-fixed").style.borderRadius = '0';
      document.getElementById("header-fixed").style.borderLeft = '0';
      document.getElementById("header-fixed").style.borderBottom = '2px solid #0000004a';
      document.getElementById("logo").style.marginTop = '0';
      document.getElementById("logoimg").style.maxWidth = '150px';

  }

  else {
      document.getElementById("header-fixed").style.background = '#ffffff17';
      document.getElementById("header-fixed").style.marginTop = '';
      document.getElementById("header-fixed").style.height = '';
      document.getElementById("header-fixed").style.marginLeft = '';
      document.getElementById("header-fixed").style.width = '';
      document.getElementById("header-fixed").style.boxShadow = '';
      document.getElementById("header-fixed").style.border = '';
      document.getElementById("header-fixed").style.borderRadius = '';
      document.getElementById("logoimg").style.maxWidth = '160px';
      document.getElementById("logo").style.marginTop = '0';


  }
}


//往下滑動至當前 div 時，主選單加上 focus 狀態樣式
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var menuItems = document.querySelectorAll('#cssmenu ul li a');

  menuItems.forEach(function (item) {
      var sectionId = item.getAttribute('href').substring(1);
      var section = document.getElementById(sectionId);
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          removeFocusFromMenuItems(menuItems);
          item.parentNode.classList.add('focus');
      } else {
          item.parentNode.classList.remove('focus');
      }
  });
});

function removeFocusFromMenuItems(menuItems) {
  menuItems.forEach(function (item) {
      item.parentNode.classList.remove('focus');
  });
}


//作品區 移入移出
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".work_content");

  items.forEach(item => {
      item.addEventListener("mouseenter", function () {
          items.forEach(otherItem => {
              otherItem.classList.remove('work_focus'); //非選擇作品移除 class
              otherItem.classList.add('dimmed'); // 非選擇作品加上變暗 class
              otherItem.style.width = '8%'; //縮小非選擇的作品寬度
              otherItem.querySelector('.profile_image').style.opacity = 1; // 恢復原縮圖
          });

          item.classList.add('work_focus'); //當前選擇作品加上 class 效果
          item.classList.remove('dimmed'); // 當前選擇作品移除變暗 class
          item.querySelector('.profile_image').style.opacity = 0; // 出現完整作品圖
      });
      item.addEventListener("mouseleave", function () {
          items.forEach(otherItem => {
              otherItem.classList.remove('dimmed'); // 恢復所有作品的背景顏色
          });
      });
  });
});



整頁鎖右鍵
document.addEventListener('contextmenu', function (event) {
     event.preventDefault();
});
