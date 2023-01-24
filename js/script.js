$(function() {
	$('.drawer').drawer();


$('.drawer-toggle', '.ham-img').click(function(){
	$(this).addClass('ham-img-close');

	// $(this).click('.qa-accordion-icon').toggleClass('is-open');
});

$(function (){
	const swiper = new Swiper('.swiper', {
		speed: 400,
    spaceBetween: 40,
		width:400,
    loop: true,
    loopedSlides: 6,
		slidePerView: 1,
    initialSlide: 1,
    speed: 1800,
		// autoplay: {
    //   delay: 0,
    //   disableOnInteraction: false,
    // },


		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	
		breakpoints: {

			0: {
				slidesPerView: 1,
				spaceBetween: 20,
				width: 274
			},

			// 540: {
			// 	slidesPerView: 1,
			// 	spaceBetween: 20,
			// 	width:400
			// },

      768: {
				slidePerView: 3,
				spaceBetween: 40,
				width: 400,
      }
    }


	});
});


  // qaアコーディオン
	$('.qa-title.active').next('.qa-answer').show();

	$('.qa-title.active').children('.qa-accordion-icon').toggleClass('is-open');


  $('.qa-title').click(function(){
    $(this).next('.qa-answer').slideToggle();

    $(this).children('.qa-accordion-icon').toggleClass('is-open');

    // $('.qa-title').not($(this)).siblings('.qa-answer').removeClass('is-open');
  });


  // topへ戻るボタン

	var pagetop = $('.totop');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 1000) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 1000);
     return false;
  });




/* Navメニューの背景色が変わる*/
$(window).on('load scroll', function(){
	if ($(window).scrollTop() > 550) {
			$('.drawer-container').addClass('drawer-bg');
	} else {
			$('.drawer-container').removeClass('drawer-bg');
	}
});

/* google form*/
// googleform -------------
let $form = $( '#js-form' )
$form.submit(function(e) {
	$.ajax({
	 url: $form.attr('action'),
	 data: $form.serialize(),
	 type: "POST",
	 dataType: "xml",
	 statusCode: {
			0: function() {
				//送信に成功したときの処理
				$form.slideUp()
				$( '#js-success' ).slideDown()
			},
			200: function() {
				//送信に失敗したときの処理
				$form.slideUp()
				$( '#js-error' ).slideDown()
			}
		}
	});
	return false;
});

// formの入力確認 -----------------
let $submit = $( '#js-submit' )
$( '#js-form input, #js-form textarea').on( 'change', function(){
	if(
		$( '#js-form input[type="text"]' ).val() !== "" &&
		$( '#js-form input[type="email"]' ).val() !== "" &&
		$( '#js-form input[name="entry.239573950"]' ).prop( 'checked') === true
	) {
		//すべて入力された時
		$submit.prop( 'disable', false)
		$submit.addClass( '-active' )
	} else {
		//入力されていない時
		$submit.prop( 'disable', true)
		$submit.removeClass( '-active' )
	}
})



//360px 未満は JS で viewport を固定する-----------------

  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})


// ページ内リンク
$('a[href^="#"]').on("click", function() {
	var speed = 600;
	var header_height = $(".drawer-container", ".drawer-bg").height();
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top - header_height;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
});


});

new WOW().init();
