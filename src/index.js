module.exports = function warmup(temperature) {
	const far = temperature * 9 / 5 +32
	if (far > -94 && far < 140) {
		if (far <= -4) {
			console.log('warm cold')
		} else if (far <= 32) {
			console.log('warm cool')
		} else if (far <= 59) {
			console.log('warm medium')
		} else if (far > 59) {
			console.log('warm hot')
		}
		return far
	} else {
		console.log('Введено неверное значение')
	}
}
