var miniMap = document.querySelector('.map');
var popupMap = document.querySelector('.modal-map');
var closeMap = document.querySelector('.close-map');
var closeFeedback = document.querySelector('.close-feedback');
var writeUs = document.querySelector('.info-button-write-us');
var popupFeedback = document.querySelector('.modal-feedback');

miniMap.addEventListener('click', function () {
	popupMap.classList.add('modal-map-open');
});

closeMap.addEventListener('click', function () {
	popupMap.classList.remove('modal-map-open');
});

writeUs.addEventListener('click', function () {
	popupFeedback.classList.add('modal-feedback-open');
});

closeFeedback.addEventListener('click', function () {
	popupFeedback.classList.remove('modal-feedback-open');
});