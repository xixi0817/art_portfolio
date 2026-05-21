var obj = $('#fire');
var fps = 200;
var letters = obj.html().split('');
obj.empty();
$.each(letters, function (el) {
    obj.append($('<span>' + this + '</span>'));
});
var animateLetters = obj.find('span');
setInterval(function () {
    animateLetters.each(function () {
        $(this).css('fontSize', 80 + (Math.floor(Math.random() * 50)));
    });
}, fps);



<script>
	
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>