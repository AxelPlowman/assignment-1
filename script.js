$(document).ready(function(){
	var rotationAmount = 90;
	var imageDegree = 0;
	$('button').on('click', function() {
		if (imageDegree >= 360) {
			imageDegree = rotationAmount;
		} else {imageDegree += rotationAmount}
	$('#kitty').css({transform: 'rotate(' + imageDegree + 'deg)'});
	});
});
