const newBookMarkForm = document.getElementById("bookmark-item-input-form");

let bookmarkList = [];
if (localStorage.getItem("bookmarkList")) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
} else {
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
}

let isAddBtnClick = false;
newBookMarkForm.style.display = "none";
