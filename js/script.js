var miniMap = document.querySelector('.map');
var popupMap = document.querySelector('.modal-map');
var closeMap = document.querySelector('.modal-close');

miniMap.addEventListener('click', function () {
	popupMap.classList.add('modal-map-open');
});

closeMap.addEventListener('click', function () {
	popupMap.classList.remove('modal-map-open');
});