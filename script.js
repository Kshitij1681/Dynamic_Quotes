AOS.init();
const apiUrl = "https://type.fit/api/quotes";
const quotes = document.getElementById("quote");
const writer = document.getElementById("author");
const btn = document.getElementById("newQ");
const tweetbtn = document.getElementById("tweetMe");
let res = "";

const tweetNow = () => {
  let tweet = `https://twitter.com/intent/tweet?text=${quotes.innerText}`;
  window.open(tweet);
};

const showRandom = () => {
  let random = Math.round(Math.random() * res.length);
  //   console.log(random);
  let { text, author } = res[random];

  quotes.innerText = text;
  if (!author) author = "unKnown";
  writer.innerText = `- By ${author}`;
};

const getQuotes = async () => {
  try {
    let data = await fetch(apiUrl);
    // console.log(data);
    res = await data.json();
    // console.log(res);
    showRandom(); //for showing random quotes
  } catch (err) {
    console.log(err);
  }
};

getQuotes();
btn.addEventListener("click", showRandom);
tweetbtn.addEventListener("click", tweetNow);
