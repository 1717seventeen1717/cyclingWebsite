// 头部导航
// $('.navHeader ul li a').on('click',function(){
//     $(this).addClass('activeNav').parent().siblings('li').find('a').removeClass('activeNav');
// });
//骑行入门二级导航
$('.riding').parent().hover(function () {
    $('.ridingCate').show();
}, function () {
    $('.ridingCate').hide();
    $('.ridingCate div a').removeClass('activeNav');
});
//维修保养二级导航
$('.jiank').parent().hover(function () {
    $('.health').show();
}, function () {
    $('.health').hide();
    $('.health div a').removeClass('activeNav');
});

$('.ridingCate div a').on('click', function () {
    $(this).addClass('activeNav').parent().siblings('div').find('a').removeClass('activeNav');
});