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
    
  
  // change the color of the navbar depending on the url (remove and add the class)
  $(document).ready(function () {
    if (window.location.pathname == "/") {
      $("#nav1").addClass("under");
      $("#nav1").addClass("activenav");
      $("#nav1").removeClass("under2");
  
      $("#nav2").removeClass("activenav");
      $("#nav2").removeClass("under");
      $("#nav2").addClass("under2");
  
      $("#nav3").removeClass("activenav");
      $("#nav3").removeClass("under");
      $("#nav3").addClass("under2");
  
      $("#nav4").removeClass("activenav");
      $("#nav4").removeClass("under");
      $("#nav4").addClass("under2");
  
    } else if ((window.location.pathname).includes("/community") ) { 
      $("#nav2").addClass("under");
      $("#nav2").addClass("activenav");
      $("#nav2").removeClass("under2");
  
      $("#nav1").removeClass("activenav");
      $("#nav1").removeClass("under");
      $("#nav1").addClass("under2");
  
      $("#nav3").removeClass("activenav");
      $("#nav3").removeClass("under");
      $("#nav3").addClass("under2");
  
      $("#nav4").removeClass("activenav");
      $("#nav4").removeClass("under");
      $("#nav4").addClass("under2");
  
    }  else if ((window.location.pathname).includes("/profile") ) { 
      $("#nav2").removeClass("activenav");
      $("#nav2").removeClass("under");
      $("#nav2").addClass("under2");
  
      $("#nav1").removeClass("activenav");
      $("#nav1").removeClass("under");
      $("#nav1").addClass("under2");
  
      $("#nav3").removeClass("activenav");
      $("#nav3").removeClass("under");
      $("#nav3").addClass("under2");
  
      $("#nav4").removeClass("activenav");
      $("#nav4").removeClass("under");
      $("#nav4").addClass("under2");
  
    } else if ((window.location.pathname).includes("/foro") ) { 
      $("#nav3").addClass("under");
      $("#nav3").addClass("activenav");
      $("#nav3").removeClass("under2");
  
      $("#nav1").removeClass("activenav");
      $("#nav1").removeClass("under");
      $("#nav1").addClass("under2");
  
      $("#nav2").removeClass("activenav");
      $("#nav2").removeClass("under");
      $("#nav2").addClass("under2");
  
      $("#nav4").removeClass("activenav");
      $("#nav4").removeClass("under");
      $("#nav4").addClass("under2");
  
    } else if ((window.location.pathname).includes("/help") ) { 
  
      $("#nav4").addClass("under");
      $("#nav4").addClass("activenav");
      $("#nav4").removeClass("under2");
  
      $("#nav1").removeClass("activenav");
      $("#nav1").removeClass("under");
      $("#nav1").addClass("under2");
  
      $("#nav2").removeClass("activenav");
      $("#nav2").removeClass("under");
      $("#nav2").addClass("under2");
  
      $("#nav3").removeClass("activenav");
      $("#nav3").removeClass("under");
      $("#nav3").addClass("under2");
  
    }
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
  
  
  // function to count the time left till 00:00:00 and return a string with the hours or minutes left
  function dowloadResetTimer(){
    var now = new Date();
  
    var resetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 0);
  
    var diff = resetTime - now;
  
    var hours = Math.floor(diff / 1000 / 60 / 60);
  
    var minutes = Math.floor(diff / 1000 / 60) - (hours * 60);
  
    var seconds = Math.floor(diff / 1000) - (hours * 60 * 60) - (minutes * 60);
  
    if (hours < 1) {
  
      if (minutes === 1) {
        return minutes + " minuto";
      }
  
      else {
        return minutes + " minutos";
      }
      
    } 
  
    else if (minutes < 0) {
      return seconds + " segundos";
    } 
  
    else { 
  
      if (hours === 1) {
        return hours + " hora";
      }
  
      else {
        return hours + " horas";
      }
  
    }
  
  }
  
  
  
  
  // function to hide tipnote class on html
  function closeTipNote() {
    $(".tipnoteContainer").fadeOut(200);
  }
  
  // tippy.js tooltip
  tippy('#downloadinfo', {
    content: 'Se restablecen en ' + dowloadResetTimer(),
  });
  
  tippy('#faqtool', {
    content: 'Preguntas Frecuentes',
  });
  
  // tippy.js tooltip
  tippy('#termsyco', {
    content: 'Si se publica un exámen, será eliminado.'
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
  
  // PAGE HELP FAQ
  const itemsFAQ = document.querySelectorAll(".accordion button");
  
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    const icon = this.querySelector("i");
  
    // if the clicked button is not true, change all icons
    if (itemToggle !== 'true') {
      itemsFAQ.forEach(item => {
        item.setAttribute('aria-expanded', 'false');
        item.querySelector("i").classList.remove("fa-chevron-up");
        item.querySelector("i").classList.add("fa-chevron-down");
      });
    }
    
    for (i = 0; i < itemsFAQ.length; i++) {
      itemsFAQ[i].setAttribute('aria-expanded', 'false');
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
  
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }
  
  }
  
  itemsFAQ.forEach(item => item.addEventListener('click', toggleAccordion));
  
  
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
  
  
      function validateSize(input) {
        const fileSize = input.files[0].size / 1024 / 1024; // in MiB
        if (fileSize > 25) {
  
  
          $(".errorlist").attr("style", "display:block");
  
          $(file).val('');
        } else {
          if ($(".errorlist").attr("style", "display:block")) {
            $(".errorlist").attr("style", "display:none");
          }
  
        }
      }
      
  // countdown clock
  /* --------------------------
   * GLOBAL VARS
   * -------------------------- */
  // The date you want to count down to
  var targetDate = new Date("2022/12/30 09:09:09");   
  
  // Other date related variables
  var days;
  var hrs;
  var min;
  var sec;
  
  /* --------------------------
   * ON DOCUMENT LOAD
   * -------------------------- */
  $(function() {
     // Calculate time until launch date
     timeToLaunch();
    // Transition the current countdown from 0 
    numberTransition('#days .number', days, 1000, 'easeOutQuad');
    numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
    numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
    numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
    // Begin Countdown
    setTimeout(countDownTimer,1001);
  });
  
  /* --------------------------
   * FIGURE OUT THE AMOUNT OF 
     TIME LEFT BEFORE LAUNCH
   * -------------------------- */
  function timeToLaunch(){
      // Get the current date
      var currentDate = new Date();
  
      // Find the difference between dates
      var diff = (currentDate - targetDate)/1000;
      var diff = Math.abs(Math.floor(diff));  
  
      // Check number of days until target
      days = Math.floor(diff/(24*60*60));
      sec = diff - days * 24*60*60;
  
      // Check number of hours until target
      hrs = Math.floor(sec/(60*60));
      sec = sec - hrs * 60*60;
  
      // Check number of minutes until target
      min = Math.floor(sec/(60));
      sec = sec - min * 60;
  }
  
  /* --------------------------
   * DISPLAY THE CURRENT 
     COUNT TO LAUNCH
   * -------------------------- */
  function countDownTimer(){ 
      
      // Figure out the time to launch
      timeToLaunch();
      
      // Write to countdown component
      $( "#days .number" ).text(days);
      $( "#hours .number" ).text(hrs);
      $( "#minutes .number" ).text(min);
      $( "#seconds .number" ).text(sec);
      
      // Repeat the check every second
      setTimeout(countDownTimer,1000);
  }
  
  /* --------------------------
   * TRANSITION NUMBERS FROM 0
     TO CURRENT TIME UNTIL LAUNCH
   * -------------------------- */
  function numberTransition(id, endPoint, transitionDuration, transitionEase){
    // Transition numbers from 0 to the final number
    $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
        duration: transitionDuration,
        easing:transitionEase,
        step: function() {
          $(id).text(Math.floor(this.numberCount));
        },
        complete: function() {
          $(id).text(this.numberCount);
        }
     });
  };
  
  
  // hide notification message
  $(".notify").animate({left: '-250px'});
  
  setTimeout(function () {
    $(".notify").animate({left: '250px'});
  
  }, 7000);
  
  setTimeout(function () {
    $(".messages").hide();
  
  }, 7500);
  
  
  /*Dropdown Menu*/
  // set .2 delay for click function
  
  
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(200);
  });
  
  $('.dropdown').focusout(function () {
    setTimeout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(200);
    }, 100);
  });
  
  /* $('.dropdown .dropdown-menu .drop-anchor li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
  }); */
  
  
  // share post button
  const sharePostButton = document.querySelector('#sharepost');
  const id_post = sharePostButton.dataset.post;
  
  sharePostButton.addEventListener('click', event => {
    if (navigator.share) { 
     navigator.share({
        title: 'Mira este archivo en Apuntify',
        url: ('https://apuntify.com/community/post/' + id_post)
      }).then(() => {
        console.log('Gracias por Compartir');
      })
      .catch(console.error);
      }
  });
  