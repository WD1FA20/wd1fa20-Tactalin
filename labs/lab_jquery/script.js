/* For Testing Purposes */
// let x = $('.bold').html();
// console.log(x);

$('p').eq(4).append("<b>I'm Fifth!</b")

$('.news-article').addClass('tomato')

// $('p').css('color', 'skyblue')

$('body').attr('id', 'reversed')

$('.article h2').on('click', function() {
    $(this).next().toggle()
});

$('.news-article').on('mouseover', function() {
    $(this).fadeTo('slow', 0.5)
});

$('.article').eq(0).css('height', '1000px')

$('p').last().html('<b>This is the last paragraph</b>')

$('h3').last().after('In the Middle')

// let second = $('.article').eq(1).clone();

// second.prependTo('.article')

$('p').on('click', function() {
    $(this).toggleClass('bold')
});

// let x = $('#news').css('float')

$('p').on('mouseover', function() {
    $(this).addClass('tomato')
});

$('p').on('mouseout', function() {
    $(this).toggleClass('tomato')
});

// let x = $('body').css('width')

$('.article').eq(0).before('<h2 class="article">First</h2>')

// $('p:even').text("I'm even!")

$('img').replaceWith("<p>Where'd the images go?</p>")

$('.article').on('click', function() {
    $(this).fadeTo('slow', 0.0)
});

// let x = $('#news').css(['width', 'padding', 'margin', 'border'])

$('section').eq(1).attr('id')

// let x = $('.news-article').text()

// var x = {'color': 'white', 'background-color': 'black', 'padding': '1em'}

// $('p').css(x)

$('body').removeClass('bold')


