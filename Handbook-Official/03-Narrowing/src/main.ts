function paddLeft(padding: number | string, input: string) {
	if (typeof padding === 'number') {
		return ' '.repeat(padding) + input
	}
	return padding + input
}

console.log(paddLeft(10, 'Hello'))
console.log(paddLeft('Hi', 'Hello'))
