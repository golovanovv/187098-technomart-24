var miniMap = document.querySelector('.map');
var popupMap = document.querySelector('.modal-map');
var closeMap = document.querySelector('.close-map');
var closeFeedback = document.querySelector('.close-feedback');
var writeUs = document.querySelector('.info-button-write-us');
var popupFeedback = document.querySelector('.modal-feedback');
var buy = document.querySelector('.buy');
var popupBuy = document.querySelector('.item-add');
var closeAdd = document.querySelector('.close-add');

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

buy.addEventListener('click', function () {
	popupBuy.classList.add('modal-add-open');
});

closeAdd.addEventListener('click', function () {
	popupBuy.classList.remove('modal-add-open');
});