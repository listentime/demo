(function(w){
	/*
		游戏构造函数
	 */
	function Game(map) {
		// 添加食物食物属性
		this.food = new Food(map);
		// 添加蛇属性
		this.snake = new Snake(map,this.food);
	}

	// 游戏开始
	Game.prototype.start = function () {
		// this 在此刻指向的是当前的game对象
		var game = this;
		// 1. 随机食物的位置
		this.food.randomLocation();
		// 2. 蛇不断的移动
		var num = setInterval(function(){
			// this在定时中指向的是window
			
			var a = game.snake.move();
			if (a==true) {
				alert('死啦');
				clearInterval(num);
			}
		},150);

		// 3. 给document注册键盘按下事件
		document.onkeydown = function (e) {
			// 3.1 获取键盘按下的键码值  ← 37   ↑ 38 →39 ↓40
			var code = e.keyCode;
			// 3.2 判断键码值，设定蛇移动的方向（更改蛇的direction的值）
			switch(code) {
				case 37: //←
					// this.snake.direction = 'left';  这是 不对的，因为this在此刻代表的是document
					
					if (game.snake.direction!='right') {
						game.snake.direction = 'left';
					}
				break;
				case 38: //↑
					if (game.snake.direction!='bottom') {
						game.snake.direction = 'top';
					}
					
				break;
				case 39: //→
					if (game.snake.direction!='left') {
						game.snake.direction = 'right';
					}
				
				break;
				case 40: //↓
					if (game.snake.direction!='top') {
						game.snake.direction = 'bottom';
					}
					
				break;

			}
		};
		


	};

	// 把游戏暴露出去
	w.Game = Game;
})(window);