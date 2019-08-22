(function(w){
    /**
     * @param {Object} map
     * @param {Object} food
     */
    //抽象蛇的构造函数
    function Snake(map,food){
        this.body = [];
        this.direction = 'right';
        this.map = map;
        this.food = food;
    };
    //原型添加获取蛇头位置的方法
    Snake.prototype.getHeadLocation = function(){
        //判断是否有蛇头
        if (this.body[0] === undefined ) {
            return {left:0,top:0};
        }else{
            //获取原来蛇头的位置
            let top = this.body[0].offsetTop;
            let left = this.body[0].offsetLeft;
            //根据移动方向来重新定位蛇头
            switch (this.direction) {
                case 'left':
                    left -= 20;
                    break;
                case 'right':
                    left += 20;
                    break;
                case 'top':
                    top -= 20;
                    break;
                case 'bottom':
                    top += 20;
                    break;
                default:
                    break;
            };
            //返回定位值
            return {left:left,top:top};
        }
    }
    //原型添加生产蛇头方法
    Snake.prototype.insertNewHead = function(){
        //获取原有的蛇头
        let headDiv = this.body[0];
        //判断蛇头是否存在
        if(headDiv !== undefined){
            //如果存在就将蛇头变为蛇身
            headDiv.className = 'snake-body'
        }

        //创建新的蛇头
        let newHeadDiv = document.createElement('div');
        newHeadDiv.className = 'snake-head';
        //给新蛇头定位
        let location = this.getHeadLocation();
        newHeadDiv.style.left = location.left + 'px';
        newHeadDiv.style.top = location.top + 'px';
        //把新蛇头放进地图
        this.map.appendChild(newHeadDiv);
        //把新div放进数组
        this.body.unshift(newHeadDiv);
    };
    //蛇移动
    Snake.prototype.move = function(){
        var flag = this.isDead();  // 获取蛇是否撞到了墙
        if (flag) {
            return true;
        }
        //把当前的蛇头变成蛇身
        this.body[0].className = 'snake-body';
        // 把最后一节蛇身取出来作为蛇头，并将其位置移到数组最前边
        let newHead = this.body.pop();
        newHead.className = 'snake-head';
        //计算新蛇头的位置
        let location = this.getHeadLocation();
        newHead.style.left = location.left + 'px';
        newHead.style.top = location.top + 'px';
        //把新蛇头放到数组最前边
        this.body.unshift(newHead);
        //蛇吃食物
        if(newHead.offsetLeft === this.food.left && newHead.offsetTop === this.food.top){
            this.food.randomLocation();
            this.insertNewHead();
        }
    };

    //判断蛇是否撞墙死
    Snake.prototype.isDead = function(){
        let location = this.getHeadLocation();
        // if(location.left<0 || location.left>=900 || location.top<0 || location.top>=600){
        //     return true;
        // }

        return location.left < 0
	 			|| location.left >= 900
	 			|| location.top < 0
	 			|| location.top >= 600;
    }
    w.Snake = Snake;
})(window)