const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
  let searchWord = searchInput.value;
  window.location.href = `https://www.google.com/search?q=${searchWord}`;
  searchWord = "";
};

const enterKey = (event) => {
  if (event.code === "Enter") {
    showSearchResult();
  }
};

if (searchInput) {
  searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
  });
} else {
  console.log("search-input 요소를 찾을 수 없습니다.");
}
