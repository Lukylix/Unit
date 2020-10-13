const { minWindowSubstring } = require("./minWindowSubstring");

const tests = [
	{ arg: ["ahffaksfajeeubsne", "jefaa"], expected: "aksfaje" },
	{ arg: ["aaabaaddae", "aed"], expected: "dae" },
	{ arg: ["aabdccdbcacd", "aad"], expected: "aabd" },
	{ arg: ["aaffsfsfasfasfasfasfasfacasfafe", "fafe"], expected: "fafe" },
	{ arg: ["aaffsfsfasfasfasfasfasfacasfafe", "fafsf"], expected: "affsf" },
	{ arg: ["vvavereveaevafefaef", "vvev"], expected: "vvave" },
];
describe("minWindowsSubstring", function () {
	for (let x = 0; x < tests.length; x++) {
		const { arg, expected } = tests[x];
		test(`arg: ${JSON.stringify(arg)} should return ${JSON.stringify(expected)}`, function () {
			expect(minWindowSubstring(arg)).toBe(expected);
		});
	}
});
