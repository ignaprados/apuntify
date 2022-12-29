$(document).ready(function () {
    var e = ["online", "abierto", "disponible" ],
      s = 0;
    setInterval(function () {
      $(".main-tittle-text span").fadeOut(function () {
        $(".main-tittle-text span").html(e[s]),
          $(".main-tittle-text span").fadeIn(),
          ++s >= e.length && (s = 0);
      });
    }, 4e3);
  });
    
  
  // share web button
  const shareButton = document.querySelector('.compartirweb');
  
  shareButton.addEventListener('click', event => {
    if (navigator.share) { 
     navigator.share({
        title: 'Apuntify — Resúmenes para estudiantes',
        url: 'https://apuntify.com'
      }).then(() => {
        console.log('Gracias por Compartir');
      })
      .catch(console.error);
      }
  });
  
  // Logo anchor tag
  $(document).ready(function () {
    $("#logo").click(function () {
      window.location.href = "/community";
    });
  });
  
  
  
  $('.music-playlists').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
 
  
    // banner animation
    if (window.pageYOffset < 990) {
      var o = 20 + (window.innerHeight - $("#base").height()) / 2,
        a = (window.innerHeight - 310) / 2;
      $("#mockup").css("top", o + "px"), $("#section1").css("top", a + "px");
    }
    $(window).on("resize", function () {
      if (window.pageYOffset < 990) {
        var e = 20 + (window.innerHeight - $("#base").height()) / 2,
          s = (window.innerHeight - 310) / 2;
        $("#mockup").css("top", e + "px"), $("#section1").css("top", s + "px");
      }
    }),
      $(window).on("scroll", function () {
        var e = window.pageYOffset,
          s = [440, 700, 950, 990];
        if (window.innerWidth > 870) {
          if (e < s[3]) {
            var o = 20 + (window.innerHeight - $("#base").height()) / 2,
              a = (window.innerHeight - 310) / 2;
            $("#mockup").css("top", o + "px"),
              $("#section1").css("top", a + "px");
          }
          e < 20
            ? ($("#cont").removeClass("three2"),
              $(".three").removeClass("three"),
              $(".topon").removeClass("topon"),
              $(".fixme").removeClass("fixme"),
              $(".eyesee").removeClass("eyesee"),
              $("#panel-base").removeClass("baseon"),
              $("#folder").removeClass("folderon"),
              $("#mockup").removeClass("oko"),
              $(".oko2").removeClass("oko2"),
              $("#mockup").css("position", "sticky"),
              $("#section1").css("opacity", "0"),
              $("#switch").removeClass("switchon"),
              $("#properties").removeClass("propertieson"),
              $("#assets").removeClass("assetson"),
              $("#panel-top").removeClass("paneltopoff"),
              $("#panel2").removeClass("panel2on"))
            : e < s[0] && e >= 20
            ? ($(".three").removeClass("three"),
              $(".topon").removeClass("topon"),
              $(".fixme").removeClass("fixme"),
              $(".showhead").removeClass("showhead"),
              $(".eyesee").removeClass("eyesee"),
              $("#panel-base").removeClass("baseon"),
              $("#folder").removeClass("folderon"),
              $("#mockup").removeClass("oko"),
              $(".oko2").removeClass("oko2"),
              $("#cont").addClass("three2"),
              $("#mockup").css("position", "sticky"),
              $("#section1").css("opacity", "0"),
              $("#switch").removeClass("switchon"),
              $("#properties").removeClass("propertieson"),
              $("#assets").removeClass("assetson"),
              $("#panel-top").removeClass("paneltopoff"),
              $("#panel2").removeClass("panel2on"),
              $("#section1").css("visibility", "visible"))
            : e >= s[0] && e < s[1]
            ? ($(".change").html("Descarga apuntes<br> que necesitas"),
              $("#base").addClass("three"),
              $("#panel").addClass("topon"),
              $("#panel").removeClass("three"),
              $("#switch").removeClass("switchon"),
              $("#properties").removeClass("propertieson"),
              $("#assets").removeClass("assetson"),
              $("#panel-top").removeClass("paneltopoff"),
              $("#panel2").removeClass("panel2on"),
              $("#theeye").addClass("eyesee"),
              $("#folder").removeClass("folderon"),
              $("#theeye").removeClass("theeyeoff"),
              $("#panel-base").addClass("baseon"),
              $(".oko2").removeClass("oko2"),
              $("#mockup").css("position", "sticky"),
              $("#cont").addClass("three2"),
              $("#section1").css("opacity", "1"),
              $("#section1").css("visibility", "visible"))
            : e >= s[1] && e < s[2]
            ? ($("#switch").addClass("switchon"),
              $("#properties").addClass("propertieson"),
              $("#assets").addClass("assetson"),
              $("#panel-top").addClass("paneltopoff"),
              $("#panel2").addClass("panel2on"),
              $(".change").html("Contribuí con<br>la comunidad"),
              $("#folder").addClass("folderon"),
              $("#theeye").addClass("theeyeoff"),
              $("#theeye").removeClass("eyesee"),
              $("#panel-base").addClass("baseon"),
              $("#base").addClass("three"),
              $("#panel").addClass("topon"),
              $("#panel").removeClass("three"),
              $("#switch").addClass("switchon"),
              $("#panel").removeClass("three"),
              $(".oko2").removeClass("oko2"),
              $("#mockup").css("position", "sticky"),
              $("#cont").addClass("three2"),
              $("#section1").css("opacity", "1"),
              $("#section1").css("visibility", "visible"))
            : e >= s[2] &&
              ($("#switch").addClass("switchon"),
              $("#properties").addClass("propertieson"),
              $("#assets").addClass("assetson"),
              $("#panel-top").addClass("paneltopoff"),
              $("#panel-base").removeClass("base-on"),
              $("#panel2").addClass("panel2on"),
              $(".fixme").removeClass("fixme"),
              $(".topon").removeClass("topon"),
              $(".three").removeClass("three"),
              $("#cont").removeClass("three2"),
              $("#mockup").css("position", "absolute"),
              $("#mockup").css("top", "930px"),
              $("#section1").css("opacity", "0"),
              $("#section1").css("visibility", "hidden"));
        }
      }),
      $(document).on("click", 'a[href^="#"]', function (e) {
        e.preventDefault(),
          $("html, body").animate(
            { scrollTop: $($.attr(this, "href")).offset().top },
            500
          );
      })
  
  