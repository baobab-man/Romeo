$(document).ready(function() {
    $(".MainImg > div:gt(0)").hide();

    setInterval(function() {
        $('.MainImg > div:first')
        .fadeOut(3000)
        .next(3000)
        .fadeIn(3000)
        .end(3000)
        .appendTo('.MainImg');
    }, 3000);
})

