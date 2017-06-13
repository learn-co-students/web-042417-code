var $stars = $('.glyphicon-star'),
  $exes = $('.glyphicon-remove'),
  $add = $('.btn')

function toggleStar () {
  $(this).toggleClass('active')
}

$stars.click(toggleStar)

function removeItem () {
  $(this).parent().hide('slow')
}

$exes.click(removeItem)
