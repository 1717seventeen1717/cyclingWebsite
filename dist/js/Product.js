$('.pc_banner-product').hover(function(){
    $(this).stop(true,true).animate({left:'-2px',top:'7px'},100).addClass('banner-shadow');
},function(){
    $(this).stop(true,true).animate({left:'0',top:'9px'},100).removeClass('banner-shadow');
});
$('.ac_banner-product').hover(function(){
    $(this).stop(true,true).animate({left:'-2px',top:'7px'},100).addClass('banner-shadow');
},function(){
    $(this).stop(true,true).animate({left:'0',top:'9px'},100).removeClass('banner-shadow');
});




