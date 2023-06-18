
document.addEventListener('keydown', function(event) 
{
  var image = document.getElementById('first');
  var imageHeight = image.offsetHeight;
  var topPosition = parseInt(image.style.top) || 0;
  var bottomPosition = parseInt(image.style.bottom) || 270;
  var moveAmount = 15;

  if (event.key === 'ArrowUp' && topPosition > -45 )
   {
    image.style.top = (topPosition - moveAmount) + 'px';
  } 
  else if (event.key === 'ArrowDown' && bottomPosition < 300) 
  {
    image.style.top = (bottomPosition + moveAmount) + 'px';
  }
});


