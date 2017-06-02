$(function(){
    /*scroll Top*/
    $("div.gotop").fadeOut("slow");
    $(window).scroll(function(){
        setTimeout(scroll_top, 200);//arrow appear time
    });
    $(".gotop").hover(function(){
        $(this).css("background-color","#307ad5");
    }, function(){
        $(this).css("background-color","#999");
        scroll_top()
    })
    $("#gotop div").click(function(){
        $('body,html').animate({ scrollTop: 0 }, 600);//arrow click page speed
            return false;
    });
})
/*scroll Top*/
function scroll_top(){
    if($(window).scrollTop()<=1) {
        $("#gotop").fadeOut("slow");
    }
    else {
        $("#gotop").fadeIn("slow");
    }
}

$(function() {
    $( ".btn_category>button" ).bind("focusin click", function(e) {
        $('#category_all').slideDown('fast');
        $(this).next().show();
        $(this).hide();
    });
    $( "#category_all>button" ).bind("click", function(e) {    
        $('#category_all').slideUp('fast');
        $(".btn_category>button").prev().show();
        $('.btn_category>button').last().hide();
    });
    $( "btn_category>button.btnon" ).bind("click", function() { 
        $('#category_all').slideUp('fast');
        $(".btn_category>button").prev().show();
        $('.btn_category>button').last().hide();
    });
    $('#category_all').slideUp("focusout", function(){ 
        $('#category_all').hide('fast');
        $('.btn_category>button').first().show();
        $('.btn_category>button').last().hide();
    });
}); 

