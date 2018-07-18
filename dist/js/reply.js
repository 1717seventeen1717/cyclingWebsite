$('.huifu').on('click', function () {
    $('.ureply').show();
});
$('.closeX').on('click', function () {
    $('.ureply').hide();
    $('.reply-con textarea').val('');
});
$('.reply-btn button').on('click', function () {
    $('.ureply').hide();
    $('.reply-con textarea').val('');
});