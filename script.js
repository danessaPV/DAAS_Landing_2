console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const eightCardEl = cardsContainerEl.querySelector(".eight--card");
	const sevenCardEl = cardsContainerEl.querySelector(".seven--card");
	const sixCardEl = cardsContainerEl.querySelector(".six--card");
	const fiveCardEl = cardsContainerEl.querySelector(".five--card");
	const fourCardEl = cardsContainerEl.querySelector(".four--card");
	const threeCardEl = cardsContainerEl.querySelector(".three--card");
	const thooCardEl = cardsContainerEl.querySelector(".thoo--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const eightBgImageEl = appBgContainerEl.querySelector(".eight--image");
	const sevenBgImageEl = appBgContainerEl.querySelector(".seven--image");
	const sixBgImageEl = appBgContainerEl.querySelector(".six--image");
	const fiveBgImageEl = appBgContainerEl.querySelector(".five--image");
	const fourBgImageEl = appBgContainerEl.querySelector(".four--image");
	const threeBgImageEl = appBgContainerEl.querySelector(".three--image");
	const thooBgImageEl = appBgContainerEl.querySelector(".thoo--image");


	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		const currentCardEl = cardsContainerEl.remove(".current--card");
		const eightCardEl = cardsContainerEl.remove(".eight--card");
		const sevenCardEl = cardsContainerEl.remove(".seven--card");
		const sixCardEl = cardsContainerEl.remove(".six--card");
		const fiveCardEl = cardsContainerEl.remove(".five--card");
		const fourCardEl = cardsContainerEl.remove(".four--card");
		const threeCardEl = cardsContainerEl.remove(".three--card");
		const thooCardEl = cardsContainerEl.remove(".thoo--card");

		const currentBgImageEl = appBgContainerEl.remove(".current--image");
		const eightBgImageEl = appBgContainerEl.remove(".eight--image");
		const sevenBgImageEl = appBgContainerEl.remove(".seven--image");
		const sixBgImageEl = appBgContainerEl.remove(".six--image");
		const fiveBgImageEl = appBgContainerEl.remove(".five--image");
		const fourBgImageEl = appBgContainerEl.remove(".four--image");
		const threeBgImageEl = appBgContainerEl.remove(".three--image");
		const thooBgImageEl = appBgContainerEl.remove(".thoo--image");
		

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			eightCardEl.style.zIndex = "10";
			sevenCardEl.style.zIndex = "20";
			sixCardEl.style.zIndex = "20";
			fiveCardEl.style.zIndex = "20";
			fourCardEl.style.zIndex = "20";
			threeCardEl.style.zIndex = "20";
			thooCardEl.style.zIndex = "20";
			

			thooBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("eight--card");
			eightCardEl.classList.add("seven--card");
			sevenCardEl.classList.add("six--card");
			sixCardEl.classList.add("five--card");
			fiveCardEl.classList.add("four--card");
			fourCardEl.classList.add("three--card");
			threeCardEl.classList.add("thoo--card");
			thooCardEl.classList.add("current--card");
			

			currentBgImageEl.classList.add("eight--image");
			eightBgImageEl.classList.add("seven--image");
			sevenBgImageEl.classList.add("six--image");
			sixBgImageEl.classList.add("five--image");
			fiveBgImageEl.classList.add("four--image");
			fourBgImageEl.classList.add("three--image");
			threeBgImageEl.classList.add("thoo--image");
			thooBgImageEl.classList.add("current--image");
			

		} else if (direction === "left") {
			eightCardEl.style.zIndex = "20";
			sevenCardEl.style.zIndex = "20";
			sixCardEl.style.zIndex = "20";
			fiveCardEl.style.zIndex = "20";
			fourCardEl.style.zIndex = "30";
			threeCardEl.style.zIndex = "20";
			thooCardEl.style.zIndex = "10";

			eightBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("thoo--card");
			eightCardEl.classList.add("current--card");
			sevenCardEl.classList.add("eight--card");
			sixCardEl.classList.add("seven--card");
			fiveCardEl.classList.add("six--card");
			fourCardEl.classList.add("five--card");
			threeCardEl.classList.add("four--card");
			thooCardEl.classList.add("three--card");
			

			currentBgImageEl.classList.add("thoo--image");
			eightBgImageEl.classList.add("current--image");
			sevenBgImageEl.classList.add("eight--image");
			sixBgImageEl.classList.add("seven--image");
			fiveBgImageEl.classList.add("six--image");
			fourBgImageEl.classList.add("five--image");
			threeBgImageEl.classList.add("four--image");
			thooBgImageEl.classList.add("three--image");
		}
	}
}



function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let eightInfoEl = cardInfosContainerEl.querySelector(".eight--info");
	let sevenInfoEl = cardInfosContainerEl.querySelector(".seven--info");
	let sixInfoEl = cardInfosContainerEl.querySelector(".six--info");
	let fiveInfoEl = cardInfosContainerEl.querySelector(".five--info");
	let fourInfoEl = cardInfosContainerEl.querySelector(".four--info");
	let threeInfoEl = cardInfosContainerEl.querySelector(".three--info");
	let thooInfoEl = cardInfosContainerEl.querySelector(".thoo--info");



	gsap.timeline()
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 0.5,
		pointerEvents: "none",
	})
		.to(
		currentInfoEl.querySelectorAll(".text"),
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "-120px",
			opacity: 0,
		},
		"-="
	)
		.call(() => {
		swapInfosClass(direction);
	})
		.call(() => initCardEvents())
		.fromTo(
		direction === "right"
		? thooInfoEl.querySelectorAll(".text")
		:eightInfoEl.querySelectorAll(".text"),
			
		{
			opacity: 0,
			translateY: "40px",
		},
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "0px",
			opacity: 1,
		}
	)
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 1,
		pointerEvents: "all",
	});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		eightInfoEl.classList.remove("eight--info");
		sevenInfoEl.classList.remove("seven--info");
		sixInfoEl.classList.remove("six--info");
		fiveInfoEl.classList.remove("five--info");
		fourInfoEl.classList.remove("four--info");
		threeInfoEl.classList.remove("three--info");
		thooInfoEl.classList.remove("thoo--info");
		
		

		if (direction === "right") {
			currentInfoEl.classList.add("eight--info");
			thooInfoEl.classList.add("current--info");
			threeInfoEl.classList.add("thoo--info");
			fourInfoEl.classList.add("three--info");
			fiveInfoEl.classList.add("four--info");
			sixInfoEl.classList.add("five--info");
			sevenInfoEl.classList.add("six--info");
			eightInfoEl.classList.add("seven--info");
			


		} else if (direction === "left") {
			currentInfoEl.classList.add("thoo--info");
			thooInfoEl.classList.add("three--info");
			threeInfoEl.classList.add("four--info");
			fourInfoEl.classList.add("five--info");
			fiveInfoEl.classList.add("six--info");
			sixInfoEl.classList.add("seven--info");
			sevenInfoEl.classList.add("eight--info");
			eightInfoEl.classList.add("current--info");
		}
	}
}


function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		delay: 0.5,
		duration: 0.4,
		stagger: 0.1,
		opacity: 1,
		translateY: 0,
	})
		.to(
		[buttons.prev, buttons.next],
		{
			duration: 0.4,
			opacity: 1,
			pointerEvents: "all",
		},
		"-=0.4"
	);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
						duration: 0.8,
						opacity: 0,
						pointerEvents: "none",
					})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();

