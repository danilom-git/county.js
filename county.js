var selectedTab;
var selectedPage;

var listSelected;

var orderSelected;
var orderIndex;
var orderNumber;

var _pRandom = {
	// [n, q, a]
	phase: "n",
	currentNumber: undefined,
	currentCounter: undefined,
	selectedCounters: [],
}

var _pTranslate = {
	counterIndex: "",
}

function loady() {
	fullscreen = document.getElementById("fullscreen")

	pageList = document.getElementById("pageList");
	pageOrder = document.getElementById("pageOrder");
	pageRandom = document.getElementById("pageRandom");
	pageTranslate = document.getElementById("pageTranslate");
	
	tabList = document.getElementById("tabList");
	tabOrder = document.getElementById("tabOrder");
	tabRandom = document.getElementById("tabRandom");
	tabTranslate = document.getElementById("tabTranslate");
	
	listInfo = document.getElementById("listInfo");
	listTable = document.getElementById("listTable");
	
	orderInfo = document.getElementById("orderInfo");
	orderAnswer = document.getElementById("orderAnswer");
	orderKanji = document.getElementById("orderKanji");
	orderKana = document.getElementById("orderKana");
	orderNext = document.getElementById("orderNext");

	randomInfo = document.getElementById("randomInfo");
	randomQuestion = document.getElementById("randomQuestion");
	randomAnswer = document.getElementById("randomAnswer");
	randomKanji = document.getElementById("randomKanji");
	randomKana = document.getElementById("randomKana");
	randomNext = document.getElementById("randomNext");

	translateInput = document.getElementById("translateInput")
	translateAnswer = document.getElementById("translateAnswer");
	translateKanji = document.getElementById("translateKanji");
	translateKana = document.getElementById("translateKana");

	counters = [
		{ kanji: "人", kana: "にん", descr: "number of people" },
		{ kanji: "本", kana: "ほん", descr: "long thin objects" },
		{ kanji: "枚", kana: "まい", descr: "thin flat objects" },
		{ kanji: "匹", kana: "ひき", descr: "small animals" },
		{ kanji: "台", kana: "だい", descr: "mechanical devices" },
		{ kanji: "冊", kana: "さつ", descr: "books" },
		{ kanji: "話", kana: "わ", descr: "stories, episodes" },
		{ kanji: "足", kana: "そく", descr: "footwear" },
		{ kanji: "軒", kana: "けん", descr: "houses" },
	];

	for (let i = 0; i < 10; ++i) {
		let fontMin = 15, fontMax = 35;
		let fontSize = Math.random() * (fontMax - fontMin) + fontMin;

		let width = fontSize * 4.033905983, height = fontSize * 1.1225;

		let leftMin = - width / 2, leftMax = 100 - width / 2;
		let left = Math.random() * (leftMax - leftMin) + leftMin;

		let topMin = - height / 2, topMax = 100 - height / 2;
		let top = Math.random() * (topMax - topMin) + topMin;

		let title = document.createElement("div");
		title.textContent = "county.js";
		title.classList.add("bg-title");
		title.style.fontSize = fontSize + "vw";
		title.style.left = left + "vw";
		title.style.top = top + "vh";
		
		fullscreen.appendChild(title);
	}

	let listCounters = document.getElementById("listCounters");
	let orderCounters = document.getElementById("orderCounters");
	let randomCounters = document.getElementById("randomCounters");
	let translateCounters = document.getElementById("translateCounters");
	counters.forEach((counter, index) => {
		let ele = document.createElement("button");
		ele.id = `listCounter${index}`;
		ele.textContent = counter.kanji;
		ele.classList.add("counter");
		ele.onclick = () => openListCounter(index);

		listCounters.appendChild(ele);


		ele = document.createElement("button");
		ele.id = `orderCounter${index}`;
		ele.textContent = counter.kanji;
		ele.classList.add("counter");
		ele.onclick = () => startOrder(index);

		orderCounters.appendChild(ele);


		ele = document.createElement("button");
		ele.id = `randomCounter${index}`;
		ele.textContent = counter.kanji;
		ele.classList.add("counter");
		ele.onclick = () => randomCounter(index);

		randomCounters.appendChild(ele);


		ele = document.createElement("button");
		ele.id = `translateCounter${index}`;
		ele.textContent = counter.kanji;
		ele.classList.add("counter");
		ele.onclick = () => translateCounter(index);

		translateCounters.appendChild(ele);
	});

	openList();
	//openListCounter(0);
}

function openList() {
	if (selectedTab)
		selectedTab.classList.remove("tab-active");
	if (selectedPage)
		selectedPage.style.display = "none";

	selectedTab = tabList;
	selectedPage = pageList;

	selectedTab.classList.add("tab-active");
	selectedPage.style.display = "flex";
}


function openListCounter(index) {
	listTable.style.display = "table";

	let arabic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000];
	
	let me = document.getElementById(`listCounter${index}`);

	let tbody = listTable.lastElementChild;
	if (listSelected) {
		if (me === listSelected)
			return;
		listSelected.classList.remove("counter-active");
		while (tbody.lastElementChild) tbody.removeChild(tbody.lastElementChild);
	}

	listSelected = me;
	me.classList.add("counter-active");

	listInfo.innerHTML = `${counters[index].kanji}　ー　${counters[index].kana}<br>${counters[index].descr}`;


	arabic.forEach(num => {
		let converted = convert(num, counters[index].kanji);

		let row = document.createElement("tr");
		
		let tdArabic = document.createElement("td");
		tdArabic.classList.add("td-arabic");
		tdArabic.textContent = num;
		row.appendChild(tdArabic);

		let tdKanji = document.createElement("td");
		tdKanji.classList.add("td-kanji");
		tdKanji.textContent = converted.kanji;
		row.appendChild(tdKanji);

		let tdKana = document.createElement("td");
		tdKana.classList.add("td-kana");
		tdKana.textContent = converted.kana;
		row.appendChild(tdKana);

		tbody.appendChild(row);
	});
}


function openOrder() {
	if (selectedTab)
		selectedTab.classList.remove("tab-active");
	if (selectedPage)
		selectedPage.style.display = "none";

	selectedTab = tabOrder;
	selectedPage = pageOrder;

	selectedTab.classList.add("tab-active");
	selectedPage.style.display = "flex";
}

function startOrder(index) {
	let me = document.getElementById(`orderCounter${index}`);

	if (orderSelected) {
		if (me === orderSelected)
			return;
		orderSelected.classList.remove("counter-active");
	}
	
	orderSelected = me;
	me.classList.add("counter-active");

	orderInfo.innerHTML = `${counters[index].kanji}　ー　${counters[index].kana}<br>${counters[index].descr}`;

	orderAnswer.style.visibility = "hidden";

	orderNumber = 0;
	orderIndex = index;

	orderNext.innerHTML = "start";
	orderNext.style.display = "flex";
}

function nextOrder() {
	++orderNumber;
	let converted = convert(orderNumber, counters[orderIndex].kanji);

	orderAnswer.style.visibility = "visible";

	orderKanji.textContent = converted.kanji;
	orderKanji.style.fontSize = Math.max(Math.min(8, Math.floor(86 / converted.kanji.length)), 4) + "vw";

	orderKana.textContent = converted.kana;
	orderKana.style.fontSize = Math.max(Math.min(8, Math.floor(86 / converted.kana.length)), 4) + "vw";

	orderNext.innerHTML = "next";
}

function openRandom() {
	if (selectedTab)
		selectedTab.classList.remove("tab-active");
	if (selectedPage)
		selectedPage.style.display = "none";

	selectedTab = tabRandom;
	selectedPage = pageRandom;

	selectedTab.classList.add("tab-active");
	selectedPage.style.display = "flex";
}

function randomCounter(index) {
	let me = document.getElementById(`randomCounter${index}`);

	let i;
	for (i = 0; i < _pRandom.selectedCounters.length; ++i)
		if (_pRandom.selectedCounters[i] === index)
			break;
	
	if (i === _pRandom.selectedCounters.length) {
		_pRandom.selectedCounters.push(index);
		me.classList.add("counter-active");
	} else {
		_pRandom.selectedCounters.splice(i, 1);
		me.classList.remove("counter-active");
	}

	if (_pRandom.phase === "n") {
		if (_pRandom.selectedCounters.length === 0) {
			randomInfo.textContent = "select counters";
			randomNext.style.display = "none";
		} else {
			randomInfo.textContent = "ready";
			randomNext.textContent = "start";
			randomNext.style.display = "flex";
		}
	}
}

function nextRandom() {
	if (_pRandom.phase === "n") {
		if (_pRandom.selectedCounters.length === 0)
			return;

		_pRandom.phase = "q";
		
		_pRandom.currentNumber = Math.floor(Math.random() * (10000 - 0)) + 0;
		_pRandom.currentCounter = counters[_pRandom.selectedCounters[Math.floor(Math.random() * _pRandom.selectedCounters.length)]].kanji;

		randomQuestion.style.visibility = "visible";
		randomQuestion.textContent = _pRandom.currentNumber + "　+　" + _pRandom.currentCounter;

		randomAnswer.style.visibility = "visible";
		randomKanji.style.fontSize = "12vmin";
		randomKanji.textContent = "?";
		randomKana.textContent = "";

		randomInfo.style.display = "none";

		randomNext.textContent = "answer";
	} else if (_pRandom.phase === "q") {
		_pRandom.phase = "a";

		let converted = convert(_pRandom.currentNumber, _pRandom.currentCounter);

		randomKanji.textContent = converted.kanji;
		randomKanji.style.fontSize = Math.max(Math.min(8, Math.floor(86 / converted.kanji.length)), 4) + "vw";

		randomKana.textContent = converted.kana;
		randomKana.style.fontSize = Math.max(Math.min(8, Math.floor(86 / converted.kana.length)), 4) + "vw";

		randomNext.innerHTML = "next";
	} else if (_pRandom.phase === "a") {
		if (_pRandom.selectedCounters.length === 0) {
			_pRandom.phase = "n";

			randomInfo.textContent = "select counters";
			randomInfo.style.display = "block";

			randomQuestion.style.visibility = "hidden";
			randomAnswer.style.visibility = "hidden";
			randomNext.style.display = "none";

			return;
		}

		_pRandom.phase = "q";
		
		_pRandom.currentNumber = Math.floor(Math.random() * (10000 - 0)) + 0;
		_pRandom.currentCounter = counters[_pRandom.selectedCounters[Math.floor(Math.random() * _pRandom.selectedCounters.length)]].kanji;

		randomQuestion.style.visibility = "visible";
		randomQuestion.textContent = _pRandom.currentNumber + "　+　" + _pRandom.currentCounter;

		randomAnswer.style.visibility = "visible";
		randomKanji.fontSize = "12vmin";
		randomKanji.textContent = "?";
		randomKana.textContent = "";

		randomNext.textContent = "answer";
	}
}

function openTranslate() {
	if (selectedTab)
		selectedTab.classList.remove("tab-active");
	if (selectedPage)
		selectedPage.style.display = "none";

	selectedTab = tabTranslate;
	selectedPage = pageTranslate;

	selectedTab.classList.add("tab-active");
	selectedPage.style.display = "flex";
}

function translateCounter(index) {
	if (_pTranslate.counterIndex !== "")
		document.getElementById("translateCounter" + _pTranslate.counterIndex).classList.remove("counter-active");
	
	if (_pTranslate.counterIndex === index) {
		_pTranslate.counterIndex = "";
	} else {
		_pTranslate.counterIndex = index;
		document.getElementById("translateCounter" + _pTranslate.counterIndex).classList.add("counter-active");
	}

	drawTranslateAnswer();	
}

function drawTranslateAnswer() {
	let arabic = Number(translateInput.value)
	if (!arabic) {
		translateKanji.textContent = "";
		translateKana.textContent = "";
		return;
	}
	
	let counter = _pTranslate.counterIndex === "" ? "" : counters[_pTranslate.counterIndex];
	let converted = convert(arabic, counter.kanji);

	console.log(`convert(${arabic}, ${counter.kanji}) === ${converted.kanji}`);

	translateKanji.textContent = converted.kanji;
	translateKanji.style.fontSize = Math.max(Math.min(8, Math.floor(86 / converted.kanji.length)), 4) + "vw";

	translateKana.textContent = converted.kana;
	translateKana.style.fontSize = Math.max(Math.min(8, Math.floor(86 / converted.kana.length)), 4) + "vw";
}