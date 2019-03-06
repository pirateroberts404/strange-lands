class CanvasObject {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	draw(ctx, tick, tick2) {
		const move = Math.sin(tick);

		const mod = (rate) => {
			return Math.abs(rate * (Math.sin(tick) * .125));
		}

		const mod2 = (rate) => {
			return rate * (Math.sin(tick2) * .45);
		}

		ctx.scale(1, 1);
		ctx.translate(0, 0);

		// Create Gradient
		const gradient = ctx.createRadialGradient(
			this.x, 20, 150, // Inner Circle x, y, radius
			550, 30, 1200 // Outer Circle x, y, radius
		);

		const colorStop = [
			'#3023AE', // Dk Purple
			'#E52ADF', // LT Purple
			'#F59223', // Orange
		];

		// Add color stops
		gradient.addColorStop(0, colorStop[2]);
		gradient.addColorStop(0.25, colorStop[1]);
		gradient.addColorStop(0.75, colorStop[0]);
		gradient.addColorStop(1, colorStop[0]);

		ctx.fillStyle = gradient;

		// Draw Shape
		ctx.beginPath();
		ctx.moveTo(639.5, 0);
		ctx.lineTo(639.5, 642.6);

		// CURVES
    /* Bezier Curve
      ctx.bezierCurveTo(
        cp1x, cp1y,
        cp2x, cp2y,
        x, y
       );
      
      cp1x
        The x-axis coordinate of the first control point.
      cp1y
        The y-axis coordinate of the first control point.
      cp2x
        The x-axis coordinate of the second control point.
      cp2y
        The y-axis coordinate of the second control point.
      x
        The x-axis coordinate of the end point.
      y
        The y-axis coordinate of the end point.
      
    */

		const mv1 = (50 * mod2(2))
		const mv2 = (250 * mod(2))

		ctx.bezierCurveTo(
			530.3, 639.5 - mv2,
			465.9, 683.3,
			426.8, 756.1 + mv2
		);
		ctx.bezierCurveTo(
			367.1, 867.6,
			395.3, 974.8 + mv2,
			223.6, 961.9
		);
		ctx.bezierCurveTo(
			51.8, 949.1,
			-25.7, 786.8 + mv1,
			7.5, 636.2 + mv1
		);
		ctx.bezierCurveTo(
			40.7, 485.5,
			200.2 + mv1, 434.5,
			295.4 + mv1, 385.7
		);
		ctx.bezierCurveTo(
			390.6, 336.9 + mv1,
			449, 252.5 + mv1,
			468.1, 198.1 + mv1
		);
		ctx.bezierCurveTo(
			496, 118.4 + mv2,
			526.6, 39.2,
			620, 0.2 - mv2
		);

		ctx.closePath();
		ctx.fill();
	}
}


export default class {
	constructor(node, w, h) {
		this.canvas = node;
		this.ctx = this.canvas.getContext('2d');
		this.ww = w;
		this.wh = h;
		this.canvas.width = w;
		this.canvas.height = h;
		this.count = 0;
		this.count2 = 0;
	};

	init() {
		this.update();
		window.addEventListener('resize', () => {
			this.ww = w;
			this.wh = h;
			this.canvas.width = w;
			this.canvas.height = h;
		});
		this.draw();
	}

	draw() {
		const object = new CanvasObject(this.ww / 2, this.wh / 2);
		object.draw(this.ctx, this.count, this.count2);
	}

	update() {
		this.count = this.count + 0.025;
		this.count2 = this.count + 0.5;
		this.ctx.clearRect(0, 0, this.ww, this.ww);
		this.draw();
		requestAnimationFrame(() => {
			this.update();
		});
	}
}
