/* For Testing Purposes */
$('img').remove();

$('#question1').on('click', function() {
    $(this).next().toggleClass('hide1');
});

$('#question2').on('click', function() {
    $(this).next().toggleClass('hide2');
});

$('#question3').on('click', function() {
    $(this).next().toggleClass('hide3');
});