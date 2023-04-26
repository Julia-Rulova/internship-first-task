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
})