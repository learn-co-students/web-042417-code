console.log('Script Started')
var $exes = $('.glyphicon-remove')
var $stars = $('.glyphicon-star')
var $checkboxes = $('.checkboxes')
var $span = $('span')
var $paras = $('p')
var text = $('#todo')
function removeDiv () {
  $(this).parent().hide('slow')
}
$exes.click(removeDiv)
function colorStar () {
  $(this).toggleClass('active')
}
$stars.click(colorStar)
function strikethrough () {
  $(this).next().next().toggleClass('strikethrough')
}
$checkboxes.click(strikethrough)

$('.btn').click(function () {
  event.preventDefault()
  text = $('#todo')
  $('.list').last().append('<p><input type="checkbox" class="checkboxes"><i class="glyphicon glyphicon-star"></i><span>' + text.val() + '</span><i class="glyphicon glyphicon-remove"></i></p>')
  text.val('')
  $('p').last().hide()
  $('p').last().show('slow')
  $exes = $('.glyphicon-remove')
  $stars = $('.glyphicon-star')
  $checkboxes = $('.checkboxes')
  $span = $('span')
  $paras = $('p')
  $exes.click(removeDiv)
  $stars.click(colorStar)
  $checkboxes.click(strikethrough)
})
