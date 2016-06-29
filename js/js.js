(function ($) {



    $(window).load(function () {

        $('.flexslider_main').flexslider({

            animation: "slide",

            controlNav: false,

            prevText: "",

            nextText: ""

        });

    });



    $(window).load(function () {

        var $grid = $('.grid').isotope({

            // options

        });

// filter items on button click

        $('.filter-button-group').on('click', 'button', function () {

            var filterValue = $(this).attr('data-filter');

            $grid.isotope({filter: filterValue});

        });

    })



    $(window).load(function () {

        var $elms = $('.el-with-animation');

        var animationEnd = [];



        $(window).on('resize scroll', checkScroll);



        checkScroll();



        function checkScroll() {

            if (animationEnd.length === $elms.length) return;



            for (var i = 0; i < $elms.length; i++) {

                var $currentEl = $elms.eq(i);



                if (!$currentEl.hasClass('animating-end') && $(window).height() + $(window).scrollTop() > $currentEl.offset().top + $currentEl.height() / 2 + 50) {

                    animate($currentEl);

                }

            }

        }



        function animate(el) {

            el.addClass('animating-end');

            animationEnd.push(1);

        }

    });



    $(window).load(function () {

        var $btn = $('.mobile-menu'),

            $nav = $('.nav');



        $btn.on('click touch', function (e) {

            e.preventDefault();



            if ($(this).hasClass('active')) {

                $(this).removeClass('active');

                $nav.removeClass('active');

            } else {

                $(this).addClass('active');

                $nav.addClass('active');

            }

        })

    })



    $(window).load(function () {

        $('.diploma-slider').flexslider({

            animation: "slide"

        });

    });



    $(window).load(function () {

        $('.review-slider').flexslider({

            animation: "slide"

        });

    });



    $(document).ready(function () {

        $(".fancybox").fancybox({

            openEffect: 'none',

            closeEffect: 'none',

            helpers: {

                overlay: {

                    locked: false

                }

            }



        });

    });



})(jQuery);



