$(document).ready(function(){

    $("#light").click(function(){
        $("body").css({
            "background-color":"white",
            "color":"black"
        });
    });

    $("#dark").click(function(){
        $("body").css({
            "background-color":"black",
            "color":"white"
        });
    });

    $("#blue").click(function(){
        $("body").css({
            "background-color":"#3498db",
            "color":"white"
        });
    });

});