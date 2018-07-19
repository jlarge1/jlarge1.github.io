$(document).ready(function () {

    var height = $(window).height();
    var heightb = height + 20;
    var width = $(window).width();


    function projectList() {

        $(".project").attr("style", "position: absolute; top: 25%;");

    }

    function showMore(id) {

        if (id == 1) {
            var bgImg = "assets/media/ba.png";
            var id1 = 0;
            var id2 = 11;
        };
        if (id == 2) {
            var bgImg = "assets/media/pta.png";
            var id1 = 1;
            var id2 = 12;
        };
        if (id == 3) {
            var bgImg = "assets/media/ts.png";
            var id1 = 2;
            var id2 = 13;
        };
        if (id == 4) {
            var bgImg = "assets/media/cc.png";
            var id1 = 3
            var id2 = 14;
        };

        $("#0" + (id - 1)).attr("style", "background-image: url(" + bgImg + ");");
        $("#" + id2).attr("style", "display: block;");


    }


    setTimeout(function() {
        $(".scroll").attr("style", "display: block;");
        setTimeout(function(){$(".scroll").attr("style", "display: none;");}, 1000);
        clearTimeout();
    }, 1500);

    $(".section").attr("style", "min-height: " + heightb + "px; width: " + width + "px;");

    $("body").attr("style", "display: block;");

    $(window).on("resize", function () {
        height = $(window).innerHeight();
        heightb = height + 50;
        width = $(window).innerWidth();
        $(".section").attr("style", "height: " + heightb + "px; width: " + width + "px;");
    });

    projectList();
    
    $(".projTitle").mouseover(function (event) {
        showMore(event.target.id);
    });
});