var miniMap = document.querySelector('.map');
var popupMap = document.querySelector('.modal-map');
var closeMap = document.querySelector('.close-map');

var closeFeedback = document.querySelector('.close-feedback');
var writeUs = document.querySelector('.info-button-write-us');
var popupFeedback = document.querySelector('.modal-feedback');
var feedbackForm = document.querySelector('.feedback');
var nameFeedback = document.querySelector('[name=user-name]');
var emailFeedback = document.querySelector('[name=user-email]');
var isStorageSupport = true;
var storage = "";
try {
	storage = localStorage.getItem('nameFeedback');
} catch (err) {
	isStorageSupport = false;
}

// var buy = document.querySelector('.buy');
// var popupBuy = document.querySelector('.item-add');
// var closeAdd = document.querySelector('.close-add');

miniMap.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupMap.classList.add('modal-map-open');
});

closeMap.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupMap.classList.remove('modal-map-open');
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal-map-open")) {
        popupMap.classList.remove("modal-map-open");
      }
    }
});


writeUs.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupFeedback.classList.add('modal-feedback-open');
	if (storage) {
    	nameFeedback.value = storage;
    	emailFeedback.focus();
    }
    else {
    	nameFeedback.focus();
    }	
});

closeFeedback.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupFeedback.classList.remove('modal-feedback-open');
	popupFeedback.classList.remove("modal-error");
});

feedbackForm.addEventListener('submit', function (evt) {
	if (!nameFeedback.value || !emailFeedback.value) {
		evt.preventDefault();
		popupFeedback.classList.remove("modal-error");
		popupFeedback.offsetWidth = popupFeedback.offsetWidth;
		popupFeedback.classList.add("modal-error");
		console.log("Нужно ввести имя и email");
	}
	else {
	if (isStorageSupport) {
		localStorage.setItem('nameFeedback', nameFeedback.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (popupFeedback.classList.contains("modal-feedback-open")) {
        popupFeedback.classList.remove("modal-feedback-open");
        popupFeedback.classList.remove("modal-error");
      }
    }
});



// buy.addEventListener('click', function () {
// 	popupBuy.classList.add('modal-add-open');
// });

// closeAdd.addEventListener('click', function () {
// 	popupBuy.classList.remove('modal-add-open');
// });