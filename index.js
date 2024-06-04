$(document).ready(function(){
    $(".elementer").hide();
    $("#crossburger").hide();

    $(".hamburger").click(function(){
        $(".elementer").slideDown();
        $(".hamburger").hide();
        $("#crossburger").fadeIn();
    });

    $("#crossburger").click(function(){
        $(".elementer").slideUp();
        $(".hamburger").fadeIn();
        $("#crossburger").hide();
    });
});