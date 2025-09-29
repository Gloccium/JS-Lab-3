// Сложность O(n) по времени и O(n) по памяти

// Если последовательность правильная, возвращаем true, иначе false
function isBalancedBrackets(text) {
    const opens = new Set(['(', '[', '{']);
    const pair = { ')': '(', ']': '[', '}': '{' };
    const stack = [];

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];

        if (opens.has(ch)) {
            stack.push(ch);
        } else if (pair[ch]) {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (top !== pair[ch]) return false;
        }
    }
    return stack.length === 0;
}

console.log(isBalancedBrackets("Текст (с [правильной {вложенностью}])"));
console.log(isBalancedBrackets("([)]"));
console.log(isBalancedBrackets("(()"));
console.log(isBalancedBrackets("(()){[]}([])"));
console.log(isBalancedBrackets("какой-то текст вообще без скобок"));