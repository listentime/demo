(function(w){
    /**
     * @param {Object} map
     */
    function Food(map){
        this.left = 0;
        this.top = 0;
        this.div = document.createElement('div');
        this.div.className = 'food';
        this.map = map;
        this.map.appendChild(div);
    };
    	// 一个随机食物位置的方法，放在食物的原型上
	Food.prototype.randomLocation = function() {
		// 这里随机食物时，把食物放到指定的“小格子”中，目的是为了将来让蛇头能够和食物重合（吃食物）
		// 计算横向最大的小格数（从0开始数）
		var maxXIndex = 900/20-1;
		// 计算纵向的最大小格数（从0开始数）
		var maxYIndex = 600/20-1;
		// 设置食物元素的坐标

		this.left = getRandom(0,maxXIndex) * 20;
		this.top = getRandom(0,maxYIndex) * 20;
		// 更改食物元素的坐标
		this.div.style.left = this.left + 'px';
		this.div.style.top = this.top  + 'px';
	};
	/*
    	功能：随机n-m之间的整数
    	参数：
    		n 最小数 number
    		m 最大素 number
    	返回值：返回结果
     */
    function getRandom (n, m) {
    	var num = parseInt( Math.random() * (m - n + 1)) + n;
    	return num; // 不要忘了返回值！！！
    }
	// 把食物构造函数暴露出去，挂给window对象
	w.Food = Food;
})(window);