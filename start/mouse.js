var lock = true;
class Mouse {
	constructor(canvas) {
		this.x = 200;
		this.y = 200;
		this.start = false;
		var rect = canvas.getBoundingClientRect();


		canvas.addEventListener('mousedown', e => {
			lock = false
		})

		canvas.addEventListener('mouseup', e => {
			lock = true
		})

		canvas.addEventListener('mousemove', e => {
			this.x = e.clientX - rect.left;
			this.y = e.clientY - rect.top;
		})
	}
}
