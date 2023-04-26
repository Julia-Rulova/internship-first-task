// filter and sort popup
let btnSort = document.querySelector(".search__btn_sort");
let btnSortMobile = document.querySelector(".search__btn_sort-mobile");
let btnSortText = document.querySelector(".search__btn-text_sort");
let btnSortTextMobile = document.querySelector(".search__btn-text_mobile");
let popupSort = document.querySelector(".popup-sort");
let popupSortMobile = document.querySelector(".popup-sort_mobile");
let popupItems = document.querySelectorAll(".popup-sort__item");
let popupFilters = document.querySelector(".popup-filters");
let popupFiltersMobile = document.querySelector(".popup-filters_mobile");
let filterBtn = document.querySelector(".search__btn_filters");
let filterBtnMobile = document.querySelector(".search__btn_filters-mobile");
let filtersSubmitBtns = document.querySelectorAll(".popup-filters__submit-btn");

// input range price
let rangeMin = document.querySelector(".popup-filters__input-range_min");
let rangeMax = document.querySelector(".popup-filters__input-range_max");
let rangeMaxValue = document.querySelector(".popup-filters__input-range_max").max;
let rangeMinValue = document.querySelector(".popup-filters__input-range_max").min;
let rangeTrack = document.querySelector(".popup-filters__range-track");
let minPrice = document.querySelector(".popup-filters__price-input_min");
let maxPrice = document.querySelector(".popup-filters__price-input_max");
let rangeMinMobile = document.querySelector(".popup-filters__input-range_min-mobile");
let rangeMaxMobile = document.querySelector(".popup-filters__input-range_max-mobile");
let rangeTrackMobile = document.querySelector(".popup-filters__range-track_mobile");
let minPriceMobile = document.querySelector(".popup-filters__price-input_min-mobile");
let maxPriceMobile = document.querySelector(".popup-filters__price-input_max-mobile");

function putCheck() {
    for (let i = 0; i < popupItems.length; i++) {
        let itemText = popupItems[i].querySelector(".popup-sort__text");
        let itemCheck = popupItems[i].querySelector(".popup-sort__check");

        
        if (itemText.textContent !== btnSortText.textContent) {
            itemCheck.classList.remove("popup-sort__check_active");
        } else {
            itemCheck.classList.add("popup-sort__check_active");
        }
    }
}

btnSort.addEventListener("click", () => {
    putCheck();
    popupSort.classList.toggle("popup-sort_open");
});

btnSortMobile.addEventListener("click", () => {
    putCheck();
    popupSortMobile.classList.toggle("popup-sort_open");
});

popupSort.addEventListener("click", (evt) => {
    putCheck();
    btnSortText.textContent = evt.target.textContent;
    btnSortTextMobile.textContent = btnSortText.textContent;
});

popupSortMobile.addEventListener("click", (evt) => {
    putCheck();
    popupSortMobile.classList.remove("popup-sort_open");
    btnSortTextMobile.textContent = evt.target.textContent;
    btnSortText.textContent = btnSortTextMobile.textContent;
});

filterBtn.addEventListener("click", () => {
    popupFilters.classList.toggle("popup-filters_open");
});

filterBtnMobile.addEventListener("click", () => {
    popupFiltersMobile.classList.toggle("popup-filters_open");
});

filtersSubmitBtns.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        popupFilters.classList.remove("popup-filters_open");
        popupFiltersMobile.classList.remove("popup-filters_open");
        console.log("Данные отфильтрованы!")
    })
});

function fillColor() {
    percent1 = (rangeMin.value / rangeMaxValue) * 100;
    percent2 = (rangeMax.value / rangeMaxValue) * 100;
    rangeTrack.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.6) ${percent1}% , #FDD446 ${percent1}% , #FDD446 ${percent2}%, rgba(0, 0, 0, 0.6) ${percent2}%)`;
}

function onChangeRangeOne() {
    if (rangeMax.value - rangeMin.value <= 0) {
        rangeMin.value = rangeMax.value;
    }

    minPrice.value = rangeMin.value;
    maxPrice.value = rangeMax.value;

    fillColor();
}

function onChangeRangeTwo() {
    if (rangeMax.value - rangeMin.value <= 0) {
        rangeMax.value = rangeMin.value;
    }

    minPrice.value = rangeMin.value;
    maxPrice.value = rangeMax.value;

    fillColor();
}

function onMinPriceChange(evt) {
    if (evt.target.value === "") {
        rangeMin.value = rangeMinValue;
    } else if (evt.target.value > Number(rangeMaxValue)) {
        minPrice.value = rangeMaxValue;
        maxPrice.value = rangeMaxValue;
        rangeMin.value = rangeMaxValue;
        rangeMax.value = rangeMaxValue;
    } else if (maxPrice.value - minPrice.value <= 0) {
        let currentPrice = maxPrice.value;
        rangeMax.value = minPrice.value;
        rangeMin.value = maxPrice.value;
        maxPrice.value = minPrice.value;
        minPrice.value = currentPrice;
    } else {
        minPrice.value = evt.target.value;
        rangeMin.value = evt.target.value;
    }

    fillColor();
}

function onMaxPriceChange(evt) {
    if (evt.target.value === "") {
        rangeMax.value = rangeMinMobile.value;
    } else if (evt.target.value > Number(rangeMaxValue)) {
        maxPrice.value = rangeMaxValue;
        rangeMax.value = rangeMaxValue;
    } else if (maxPrice.value - minPrice.value <= 0) {
        rangeMin.value = maxPrice.value;
        rangeMax.value = minPrice.value;
    } else {
        maxPrice.value = evt.target.value;
        rangeMax.value = evt.target.value;
    }

    fillColor();
}

rangeMin.addEventListener("input", onChangeRangeOne);
rangeMax.addEventListener("input", onChangeRangeTwo);

minPrice.addEventListener("input", onMinPriceChange);
maxPrice.addEventListener("input", onMaxPriceChange);

function fillColorMobile() {
    percent1 = (rangeMinMobile.value / rangeMaxValue) * 100;
    percent2 = (rangeMaxMobile.value / rangeMaxValue) * 100;
    rangeTrackMobile.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.6) ${percent1}% , #FDD446 ${percent1}% , #FDD446 ${percent2}%, rgba(0, 0, 0, 0.6) ${percent2}%)`;
}

function onChangeRangeOneMobile() {
    if (rangeMaxMobile.value - rangeMinMobile.value <= 0) {
        rangeMinMobile.value = rangeMaxMobile.value;
    }

    minPriceMobile.value = rangeMinMobile.value;
    maxPriceMobile.value = rangeMaxMobile.value;

    fillColorMobile();
}

function onChangeRangeTwoMobile() {
    if (rangeMaxMobile.value - rangeMinMobile.value <= 0) {
        rangeMaxMobile.value = rangeMinMobile.value;
    }

    minPriceMobile.value = rangeMinMobile.value;
    maxPriceMobile.value = rangeMaxMobile.value;

    fillColorMobile();
}

function onMinPriceChangeMobile(evt) {
    if (evt.target.value === "") {
        rangeMinMobile.value = rangeMinValue;
    } else if (evt.target.value > Number(rangeMaxValue)) {
        minPriceMobile.value = rangeMaxValue;
        maxPriceMobile.value = rangeMaxValue;
        rangeMinMobile.value = rangeMaxValue;
        rangeMaxMobile.value = rangeMaxValue;
    } else if (maxPriceMobile.value - minPriceMobile.value <= 0) {
        let currentPrice = maxPriceMobile.value;
        rangeMaxMobile.value = minPriceMobile.value;
        rangeMinMobile.value = maxPriceMobile.value;
        maxPriceMobile.value = minPriceMobile.value;
        minPriceMobile.value = currentPrice;
    } else {
        minPriceMobile.value = evt.target.value;
        rangeMinMobile.value = evt.target.value;
    }

    fillColorMobile();
}

function onMaxPriceChangeMobile(evt) {
    if (evt.target.value === "") {
        rangeMaxMobile.value = rangeMinMobile.value;
    } else if (evt.target.value > Number(rangeMaxValue)) {
        maxPriceMobile.value = rangeMaxValue;
        rangeMaxMobile.value = rangeMaxValue;
    } else if (maxPriceMobile.value - minPriceMobile.value <= 0) {
        rangeMinMobile.value = maxPriceMobile.value;
        rangeMaxMobile.value = minPriceMobile.value;
    } else {
        maxPriceMobile.value = evt.target.value;
        rangeMaxMobile.value = evt.target.value;
    }

    fillColorMobile();
}

rangeMinMobile.addEventListener("input", onChangeRangeOneMobile);
rangeMaxMobile.addEventListener("input", onChangeRangeTwoMobile);

minPriceMobile.addEventListener("input", onMinPriceChangeMobile);
maxPriceMobile.addEventListener("input", onMaxPriceChangeMobile);