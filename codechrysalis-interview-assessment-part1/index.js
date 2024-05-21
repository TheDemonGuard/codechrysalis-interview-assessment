/*
 * 引数に文字列を1つ取る `balancedParens` 関数を実装してください。
 *
 * - すべてのカッコのペアが揃っていてかつ閉じていたら true を返してください
 * - そうでなければ false を返してください
 *
 * 例：
 * balancedParens('()');    // true
 * balancedParens('(())');  // true
 * balancedParens('(');     // false
 * balancedParens(')(');    // false
 *
 * - あらゆる種類のカッコに対して、同じ動作をするようにしてください
 *
 * 例：
 * balancedParens('[](){}');  // true
 * balancedParens('[({})]');  // true
 * balancedParens('[(]{)}');  // false
 *
 * - カッコ以外の文字列は無視してください
 *
 * 例：
 * balancedParens('const dog = { bark: true }');   // true
 * balancedParens('const cat = () => { meow();');  // false
 *
 * - 不適当な引数を処理してください。
 *
 * 例：
 * balancedParens('');  // false
 * balancedParens([]);  // false
 *
 */
const balancedParens = (input) => {
	let status = false; // 初期値設定。

	if (typeof input === 'string' || input instanceof String) { // 文字列かいなか。
		let inputLen = input.length;
		if (inputLen >= 2) { // 文字個数が最低 2。
			let tmpStack = []; // 空の配列を宣言。開きカッコ"("、"{"、"["を管理する。
			for (let i = 0; i < inputLen; i++) {
				let c = tmpStack[tmpStack.length - 1]; // 配列の末尾から開きカッコを参照する。
				let tmpC = input[i];
				if (tmpC == "(" ||
				    tmpC == "{" ||
				    tmpC == "[") {
					tmpStack.push(tmpC); // 所定の文字が "("、"{"、"[" の場合は、配列の末尾に追加。
				} else if (tmpC == ")" ||
				    tmpC == "}" ||
				    tmpC == "]") {　// 所定の文字が ")"、"}"、"]" の場合、
					if ((c == "(" && tmpC == ")") ||
					    (c == "{" && tmpC == "}") ||
					    (c == "[" && tmpC == "]")) {　// 該当する対のカッコが配列の末尾の文字か確認。
						tmpStack.pop(); // 条件を満たす場合は、配列の末尾から削除する。
					} else {
						status = false;
					}
				}
			}
			status = tmpStack.length ? false : true;
		}
	}

	return status;
};

module.exports = { balancedParens };
