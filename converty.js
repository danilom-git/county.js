_digits = [
	{ kanji: "一", romaji: "iti" },
	{ kanji: "二", romaji: "ni" },
	{ kanji: "三", romaji: "san" },
	{ kanji: "四", romaji: "yon" },
	{ kanji: "五", romaji: "go" },
	{ kanji: "六", romaji: "roku" },
	{ kanji: "七", romaji: "nana" },
	{ kanji: "八", romaji: "hati" },
	{ kanji: "九", romaji: "kyuu" },
];

_tens = [
	{ kanji: "十", romaji: "juu" },
	{ kanji: "百", romaji: "hyaku" },
	{ kanji: "千", romaji: "sen'" },
];

_fourtens = [
	{ kanji: "万", romaji: "man" },
	{ kanji: "億", romaji: "oku" },
	{ kanji: "兆", romaji: "tyou" },
	{ kanji: "京", romaji: "kei" }
];

_counters = [
	{ kanji: "つ", romaji: "tu" },
	{ kanji: "日", romaji: "niti" },
	{ kanji: "人", romaji: "nin" },
	{ kanji: "年", romaji: "nen" },
	{ kanji: "月", romaji: "gatu" },
	{ kanji: "時", romaji: "ji" },
	{ kanji: "間", romaji: "kan" },
	{ kanji: "時", romaji: "ji" },
	{ kanji: "分", romaji: "fun" },
	{ kanji: "階", romaji: "kai" },
	{ kanji: "歳", romaji: "sai" },
	{ kanji: "本", romaji: "hon" },
	{ kanji: "匹", romaji: "hiki" },
	{ kanji: "頭", romaji: "tou" },
	{ kanji: "冊", romaji: "satu" },
	{ kanji: "台", romaji: "dai" },
	{ kanji: "枚", romaji: "mai"},
	{ kanji: "話", romaji: "wa"},
	{ kanji: "足", romaji: "soku"},
	{ kanji: "軒", romaji: "ken"},
];

_wordexcs = [
	["一つ", "hitotu"],
	["一日", "tuitati"],
	["一人", "hitori"],
	["二つ", "futatsu"],
	["二日", "futuka"],
	["二人", "futari"],
	["三つ", "mittu"],
	["三日", "mikka"],
	["四つ", "yottu"],
	["四日", "yokka"],
	["四人", "yonin"],
	["四年", "yonen"],
	["四月", "sigatu"],
	["四時", "yoji"],
	["五つ", "itutu"],
	["五日", "ituka"],
	["六つ", "muttu"],
	["六日", "muika"],
	["七つ", "nanatu"],
	["七日", "nanoka"],
	["七人", "sitinin"],
	["七月", "sigatu"],
	["七時", "sitiji"],
	["八つ", "yattu"],
	["八日", "youka"],
	["九つ", "kokonotu"],
	["九日", "kokonoka"],
	["九月", "kugatu"],
	["九時", "kuji"],
	["十つ", "tou"],
	["十日", "touka"],
	["十四日", "juuyokka"],
	["十四人", "juuyonin"],
	["十四時", "juuyoji"],
	["二十日", "hatuka"],
	["二十歳", "hatati"],
	["二十四日", "nijuuyokka"],
	["二十四人", "nijuuyonin"],
	// ｘ四日、ｘ四人、ｘ四時？
];

__wordexcs = new Map(_wordexcs);

_countexcs = [
	["一k", [[2, "k"], []]],
	["一s", [[2, "s"], []]],
	["一t", [[2, "t"], []]],
	["一h", [[2, "p"], [1, "p"]]],
	["一f", [[2, "p"], [1, "p"]]],
	["一p", [[2, "p"], []]],
	["三h", [[], [1, "b"]]],
	["三f", [[], [1, "p"]]],
	["三w", [[], [1, "b"]]],
	["四h", [[], [1, "p"]]],	//？
	["四f", [[], [1, "p"]]],	//？
	["六k", [[2, "k"], []]],
	["六h", [[2, "p"], [1, "p"]]],
	["六f", [[2, "p"], [1, "p"]]],
	["六p", [[2, "p"], []]],
	["六w", [[2, "p"], [1, "p"]]],
	["八k", [[2, "k"], []]],
	["八s", [[2, "s"], []]],
	["八t", [[2, "t"], []]],
	["八h", [[2, "p"], [1, "p"]]],
	["八f", [[2, "p"], [1, "p"]]],
	["八p", [[2, "p"], []]],
	["八w", [[2, "p"], [1, "p"]]],
	["十k", [[1, "k"], []]],
	["十s", [[1, "s"], []]],
	["十t", [[1, "t"], []]],
	["十h", [[1, "p"], [1, "p"]]],
	["十f", [[1, "p"], [1, "p"]]],
	["十p", [[1, "p"], []]],
	["十w", [[2, "ip"], [1, "p"]]],
	["百k", [[1, ""], []]],
	["百h", [[2, "p"], [1, "p"]]],
	["百f", [[2, "p"], [1, "p"]]],
	["百p", [[2, "p"], []]],
	["千h", [[], [1, "b"]]],
	["千f", [[], [1, "p"]]],
	["万h", [[], [1, "b"]]],
	["万f", [[], [1, "p"]]],
	["何h", [[1, ""], [1, "b"]]],
	["何f", [[1, ""], [1, "p"]]],
];

__countexcs = new Map(_countexcs);

_numexcs = [
	["一百", [[2, "p"], [1, "p"]]],
	["一千", [[2, "s"], []]],
	["一兆", [[2, "t"], []]],
	["一京", [[2, "k"], []]],
	["三百", [[], [1, "b"]]],
	["三千", [[], [1, "z"]]],
	["六百", [[2, "p"], [1, "p"]]],
	["六京", [[2, "k"], []]],
	["八百", [[2, "p"], [1, "p"]]],
	["八千", [[2, "s"], []]],
	["八兆", [[2, "t"], []]],
	["八京", [[2, "k"], []]],
	["十兆", [[1, "t"], []]],
	["十京", [[1, "k"], []]],
	["百京", [[2, "k"], []]],
];

__numexcs = new Map(_numexcs);

function ce(str, len, rep) {
	return str.slice(0, -len) + rep;
}

function cs(str, len, rep) {
	return rep + str.slice(len);
}

function merge(a, b, mp) {
	let newa = mp[0].length === 2 ? ce(a, mp[0][0], mp[0][1]) : a;
	let newb = mp[1].length === 2 ? cs(b, mp[1][0], mp[1][1]) : b;
	return newa + newb;
}

function convert(arabic, counter) {
	let fcounter = undefined;
	for (let i = 0; i < _counters.length; ++i)
		if (_counters[i].kanji === counter) {
			fcounter = _counters[i];
			break;
		}

	let flipped = arabic.toString().split("").reverse();

	let info = [];

	let m = flipped.length - 1;
	let nonzero = false;
	if (
		flipped[m] == 1 &&
		m > 3 &&
		(m % 4 == 0 || (m % 4 == 3 && flipped[m - 1] == 0 && flipped[m - 2] == 0))
	) {
		info.push(_digits[0]);
		nonzero = true;
	}

	for (let i = flipped.length - 1; i >= 0; --i) {
		if (flipped[i] == 0) {
			if (i % 4 == 0 && i > 0) {
				if (nonzero)
					info.push(_fourtens[i / 4 - 1]);
				nonzero = false;
			}
		} else {
			nonzero = i % 4 != 0;

			if (flipped[i] != 1 || i == 0)
				info.push(_digits[flipped[i] - 1]);

			if (i > 0)
				info.push(i % 4 == 0 ? _fourtens[i / 4 - 1] : _tens[i % 4 - 1]);
		}
	}

	let kanji = info.reduce((a, b) => a + b.kanji, "");
	if (fcounter)
		kanji += fcounter.kanji;

	let romaji = __wordexcs.get(kanji);
	
	if (!romaji) {
		romaji = info[0].romaji;

		for (let i = 0; i < info.length - 1; ++i) {
			let mp = __numexcs.get(info[i].kanji + info[i + 1].kanji);
			
			if (mp)
				romaji = merge(romaji, info[i + 1].romaji, mp);
			else
				romaji += info[i + 1].romaji;
		}

		if (fcounter) {
			let mp = __countexcs.get(info[info.length - 1].kanji + fcounter.kanji[0]);
			if (!mp)
				mp = __countexcs.get(info[info.length - 1].kanji + fcounter.romaji[0]);

			if (mp)
				romaji = merge(romaji, fcounter.romaji, mp);
			else
				romaji += fcounter.romaji;
		}
	}

	let kana = wanakana.toHiragana(romaji);

	return { kanji, kana };
}
