function MinWindowSubstring(strArr) {
	const strWinMap = [...strArr[1]].reduce((result, char) => ((result[char] = (result[char] || 0) + 1), result), {});

	let strMap = {};
	let strIndexArray = [];
	for (const [i, char] of [...strArr[0]].entries())
		if (strWinMap[char]) (strMap[char] ? strMap[char].push(i) : (strMap[char] = [i])) && (strIndexArray[i] = char);

	const strIndexKeys = Object.keys(strIndexArray);
	const strIndexMap = new Map([...strIndexKeys].map((key) => [key, strIndexArray[key]]));

	for (let i = 0; i < strIndexKeys.length - i; i++) {
		const key = strIndexKeys[i];
		const keyEnd = strIndexKeys[strIndexKeys.length - i - 1];
		const char = strIndexMap.get(key);
		const charEnd = strIndexMap.get(keyEnd);

		if (strMap[char].length > strWinMap[char]) (strMap[char].shift() || 1) && strIndexMap.delete(key);
		if (strMap[charEnd].length > strWinMap[charEnd]) strMap[charEnd].pop() && strIndexMap.delete(keyEnd);
	}

	return strArr[0].slice(parseInt([...strIndexMap.keys()][0]), parseInt([...strIndexMap.keys()].slice(-1)[0]) + 1);
}

exports.MinWindowSubstring = MinWindowSubstring;
