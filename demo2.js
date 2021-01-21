if ($('.hamburger').length > 0){

    $(document).ready(function () {
        $(".hamburger").click(function () {
            $('.hamburger').toggleClass("hamburger-cross");
            $('.menu').toggleClass("menu-open");
        }); 

        $(".cta").click(function () {
            $('.hamburger').addClass("hamburger-cross");
            $('.menu').addClass("menu-open");
        }); 
    });


    var stickyOffset = $(".change").offset();
    var $contentDivs = $(".switch-color");
    $(document).scroll(function() {
        $contentDivs.each(function(k) {
            var _thisOffset = $(this).offset();
            var _actPosition = _thisOffset.top - $(window).scrollTop();
            if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 70) {
                $(".change").removeClass("white black").addClass($(this).hasClass("white") ? "white" : "black");
                return false;
            }
        });
    });

}
