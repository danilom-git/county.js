var listSelected;

var orderSelected;

var orderIndex;
var orderNumber;

function loady() {
	fullscreen = document.getElementById("fullscreen")

	pageList = document.getElementById("pageList");
	pageOrder = document.getElementById("pageOrder");
	pageRandom = document.getElementById("pageRandom");
	
	tabList = document.getElementById("tabList");
	tabOrder = document.getElementById("tabOrder");
	tabRandom = document.getElementById("tabRandom");
	
	listInfo = document.getElementById("listInfo");
	listTable = document.getElementById("listTable");
	
	orderInfo = document.getElementById("orderInfo");
	orderAnswer = document.getElementById("orderAnswer");
	orderKanji = document.getElementById("orderKanji");
	orderKana = document.getElementById("orderKana");
	orderNext = document.getElementById("orderNext");

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
	});

	openList();
	openListCounter(0);
}

function openList() {
	pageList.style.display = "flex";
	pageOrder.style.display = "none";
	pageRandom.style.display = "none";

	tabList.classList.add("tab-active");
	tabOrder.classList.remove("tab-active");
	tabRandom.classList.remove("tab-active");
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
	pageList.style.display = "none";
	pageOrder.style.display = "flex";
	pageRandom.style.display = "none";

	tabList.classList.remove("tab-active");
	tabOrder.classList.add("tab-active");
	tabRandom.classList.remove("tab-active");
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
	orderKanji.style.fontSize = Math.min(8, Math.floor(86 / converted.kanji.length)) + "vw";

	orderKana.textContent = converted.kana;
	orderKana.style.fontSize = Math.min(8, Math.floor(86 / converted.kana.length)) + "vw";

	orderNext.innerHTML = "next";
}

function openRandom() {
	pageList.style.display = "none";
	pageOrder.style.display = "none";
	pageRandom.style.display = "flex";

	tabList.classList.remove("tab-active");
	tabOrder.classList.remove("tab-active");
	tabRandom.classList.add("tab-active");
}