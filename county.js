var listSelected;

function loady() {
	pageList = document.getElementById("pageList");
	pageOrder = document.getElementById("pageOrder");
	pageRandom = document.getElementById("pageRandom");
	tabList = document.getElementById("tabList");
	tabOrder = document.getElementById("tabOrder");
	tabRandom = document.getElementById("tabRandom");
	
	listInfo = document.getElementById("listInfo");
	listTable = document.getElementById("listTable");

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
		let fontMin = 200, fontMax = 400;
		let fontSize = Math.random() * (fontMax - fontMin) + fontMin;

		let width = fontSize * 4.033999939, height = fontSize * 1.1225;

		let leftMin = - width / 2, leftMax = window.innerWidth - width / 2;
		let left = Math.random() * (leftMax - leftMin) + leftMin;

		let topMin = - height / 2, topMax = window.innerHeight - height / 2;
		let top = Math.random() * (topMax - topMin) + topMin;

		let title = document.createElement("div");
		title.textContent = "county.js";
		title.classList.add("bg-title");
		title.style.fontSize = fontSize + "px";
		title.style.left = left + "px";
		title.style.top = top + "px";
		
		document.body.appendChild(title);
	}

	let contCounters = document.getElementById("listCounters");
	counters.forEach((counter, index) => {
		let ele = document.createElement("div");
		ele.id = `listCounter${index}`;
		ele.textContent = counter.kanji;
		ele.classList.add("counter");
		ele.onclick = () => openListCounter(index);

		contCounters.appendChild(ele);
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
	
	let me = document.getElementById(`listCounter${index}`)

	listInfo.innerHTML = `${counters[index].kanji}　ー　${counters[index].kana}<br>${counters[index].descr}`;

	let tbody = listTable.lastElementChild;
	if (listSelected) {
		listSelected.classList.remove("counter-active");
		while (tbody.lastElementChild) tbody.removeChild(tbody.lastElementChild);
	}

	listSelected = me;
	me.classList.add("counter-active");


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

function openRandom() {
	pageList.style.display = "none";
	pageOrder.style.display = "none";
	pageRandom.style.display = "flex";

	tabList.classList.remove("tab-active");
	tabOrder.classList.remove("tab-active");
	tabRandom.classList.add("tab-active");
}