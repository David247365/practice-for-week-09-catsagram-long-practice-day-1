// Your code here
console.log("hello");
const url = "https://api.thecatapi.com/v1/images/search";
const api_key =
	"live_pF1yY6ycY8f0WQFiC5NgHECgxGVHdSfGmTFhH4mGhKBZmxtoM0HNOpcpesGKhNiw";

const kanyeUrl = "https://api.kanye.rest";

let changeCat = document.getElementById("change-cat");
let catImg = document.getElementById("catimg");
let num = document.getElementById("num");

let increase = document.getElementById("up");
let decrease = document.getElementById("down");

let kanyeQuote = document.querySelectorAll("kanye-quote");

const getQuote = () => {
	fetch(kanyeUrl)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.quote);
			kanyeQuote.innerText = data.quote;
		});
};

getQuote();

const fetchCat = () => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			catImg.style.backgroundImage = `url(${data[0].url})`;
		});
};

fetchCat();

num.innerText = 0;

changeCat.addEventListener("click", (e) => {
	fetchCat();
	getQuote();
	num.innerText = 0;
});

increase.addEventListener("click", () => {
	decrease.disabled = false;
	if (num.innerText >= 1) {
		increase.disabled = true;
	} else if (num.innerText <= 1) {
		num.innerText++;
		increase.style.color = "gray";
	}
	if (num.innerText === 1) {
		decrease.style.color = "gray";
	}
});
decrease.addEventListener("click", () => {
	increase.disabled = false;
	if (num.innerText <= -1) {
		decrease.disabled = true;
	} else if (num.innerText >= -1) {
		num.innerText--;
		increase.style.color = "green";
	}
});
