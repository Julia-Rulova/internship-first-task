let btnSort = document.querySelector(".search__btn_sort");
let btnSortMobile = document.querySelector(".search__btn_sort-mobile");
let btnSortText = document.querySelector(".search__btn-text_sort");
let btnSortTextMobile = document.querySelector(".search__btn-text_mobile");
let popupSort = document.querySelector(".popup-sort");
let popupSortMobile = document.querySelector(".popup-sort_mobile");
let popupItems = document.querySelectorAll(".popup-sort__item");

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
    btnSortTextMobile.textContent = evt.target.textContent;
    btnSortText.textContent = btnSortTextMobile.textContent;
});