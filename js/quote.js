const API_URL = "https://random-quote.hyobb.com/";
const quoteElement = document.getElementById("quote");
const quoteItem = localStorage.getItem("quote");

const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

const setQuote = (respond) => {
  let quote = { createDate: `${month}-${date}`, quoteData: respond };
  localStorage.setItem("quote", JSON.stringify(quote));
  quoteElement.textContent = respond;
};

const getQuote = async () => {
  try {
    const data = await fetch(API_URL).then((res) => res.json());
    const respond = data[1].respond;
    setQuote(respond);
  } catch (err) {
    console.log(`err:${err}`);
    setQuote("에러이지만 아닌척 해본다 - 에디");
  }
};

if (quoteItem) {
  let { createDate, quoteData } = JSON.parse(quoteItem);
  if (createDate === `${month}-${date}`) {
    quoteElement.textContent = `"${quoteData}"`;
  } else {
    getQuote();
  }
} else {
  getQuote();
}
